let spinning = true

// create illo
let illo = new Zdog.Illustration({
  // set canvas
  element: '.zdog-canvas',
  zoom: 4,
  dragRotate: true,
  onDragStart: () => spinning = false
});

// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 20,
  stroke: 5,
  color: '#636',
  translate: { z: 10 },

});

// add rect
new Zdog.Rect({
  addTo: illo,
  width: 20,
  height: 20,
  translate: { z: -10 },
  stroke: 3,
  color: '#E62',
  fill: true
});

const animate = () => {
  if (spinning) illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();