const vertexShader = `#version 300 es

// an attribute is an input (in) to a vertex shader
// it will receive data from a buffer
in vec4 a_position;

// all shaders have a main function
void main() {
  gl_Position = a_position;
}
`;

const fragmentShader = `#version 300 es

// frag shaders don't have a default precision
// highp is a good default (high precision)
precision highp float;

// declare an output for the frag shader
out vec4 outColor;

void main() {
  // set the output to a constant
  outColor = vec4(1, 0, 0.5, 1);
}
`;


class Katalyst {
  constructor() {
    this.createCanvas();
    this.createRenderingContext();
  }
  
  createCanvas() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
  }
  
  createRenderingContext(context = 'webgl2') {
    this.gl = this.canvas.getContext(context);
    if (this.gl) console.error('WEBGL 2 is not supported in this browser');
  }
   
  createShader(type, source) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
  }
}



























