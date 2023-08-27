const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lens1 = new Lens(500, 500, 400, 400, 'concave');
const lens2 = new Lens(500, 500, 400, 400, 'convex');

lens1.drawLens(ctx);
lens2.drawLens(ctx);
