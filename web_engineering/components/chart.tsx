'use client';
import React, {useMemo, useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

const ReactEcharts = dynamic(() => import('echarts-for-react'), {ssr: false});

const models = [
  {name: 'gpt-4', color: '#2ec7c9'},
  {name: 'Qwen', color: '#bc99fa'},
  {name: 'spark', color: '#ffb940'},
  {name: 'chatglm3', color: '#8cd3ff'},
  {name: 'deepseek', color: '#ffb4b4'},
];
const total = 1024;
const data = models.map(model => ({
  name: model.name,
  value: Math.floor(Math.random() * 400) + 100,
  itemStyle: {color: model.color},
}));

// 动态检测dark模式 (略，可复用前面代码)
function useIsDark() {
  const [isDark, setIsDark] = React.useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  React.useEffect(() => {
    const el = document.documentElement;
    const update = () => setIsDark(el.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, {attributes: true, attributeFilter: ['class']});
    return () => observer.disconnect();
  }, []);
  return isDark;
}

// 监听窗口宽度
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

function getOption(isDark: boolean, isMobile: boolean) {
  return {
    title: [
      {
        text: '模型调用次数占比',
        left: isMobile ? 20 : 30,
        top: 10,
        textStyle: {fontWeight: 700, fontSize: 17, color: isDark ? '#fff' : '#222'},
      },
      {
        text: `总计:  ${total}`,
        left: isMobile ? 20 : 30,
        top: 40,
        textStyle: {color: isDark ? '#bbb' : '#888', fontSize: 14, fontWeight: 400}
      }
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
      backgroundColor: isDark ? '#222' : '#fff',
      borderColor: isDark ? '#333' : '#ddd',
      textStyle: {color: isDark ? '#fff' : '#222'}
    },
    legend: {
      orient: isMobile ? 'horizontal' : 'vertical',
      left: isMobile ? 'center' : 30,
      top: isMobile ? 'bottom' : 70,
      data: models.map(x => x.name),
      itemWidth: 12,
      itemHeight: 12,
      formatter: (name: string) => `{style|●} ${name}`,
      textStyle: {
        color: isDark ? '#ddd' : '#333',
        fontSize: isMobile ? 13 : 15,
        rich: {style: {fontSize: 17, padding: [0, 5, 0, 0]}}
      }
    },
    grid: isMobile
      ? {left: '0%', right: '0%', bottom: '15%', containLabel: true}
      : undefined,
    backgroundColor: isDark ? '#1c1917' : '#eeefef',
    series: [
      {
        name: 'Proportion',
        type: 'pie',
        radius: isMobile ? ['40%', '60%'] : ['50%', '70%'],
        center: isMobile ? ['50%', '40%'] : ['60%', '55%'],
        avoidLabelOverlap: false,
        label: {
          show: !isMobile, // 移动端隐藏外部文本以防重叠，可按需调整
          position: 'outside',
          fontSize: isMobile ? 11 : 14,
          color: isDark ? '#eee' : '#222'
        },
        labelLine: {
          show: !isMobile,
        },
        data,
      }
    ]
  };
}

export default function ModelDonutChart() {
  const isDark = useIsDark();
  const winWidth = useWindowWidth();
  const isMobile = winWidth < 500;

  const option = useMemo(() => getOption(isDark, isMobile), [isDark, isMobile]);
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        minHeight: 320,
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        width: '100%',
        aspectRatio: '2 / 1',
        minHeight: 320,
        maxHeight: 600,
      }}>
        <ReactEcharts
          option={option}
          style={{width: '100%', height: '100%'}}
          opts={{renderer: 'canvas'}}
        />
      </div>
    </div>
  );
}