const customStandartPostProces = `#version 300 es
precision mediump float;
in vec2 uv;
out vec4 color;
uniform sampler2D maintex;
uniform sampler2D maindepth;
uniform sampler2D shadow;
void main(){
    vec3 col = vec3(mix(texture(maintex, uv).rgb, vec3(0.23, 0.0, 0.39), 1.0 - min((1.0-texture(maindepth, uv).r)*96.0, 1.0)));
    color = vec4(col, 1);
}
`;