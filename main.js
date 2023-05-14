function main(){
    var eng = new Engine("#back", customStandartPostProces, true, false, 4000);
    eng.clearcol = new vec3(0.23, 0, 0.39);
    eng.useorthosh = true;
    eng.sfar = 200.0;
    eng.sfov = 15.0;
    eng.playerphysics = false;
    eng.pos.z = -5;
    eng.pos.y = -1.7;

    eng.setLight(0, new vec3(0, 1, 1), new vec3(1, 1, 1), 1);

    var retro = new Mesh(retrov, retron, retrou, standartFragmentShaderNoCubemap, standartVertexShader, eng, tex, spec, norm, texx, texy, false, null);

    function drawFrame(now){
        eng.pos.z += 0.1;
        if(eng.pos.z >= 20){
            eng.pos.z = 0;
        }
        eng.shadowpos.z = eng.pos.z;
        eng.shadowpos.y = -15;
        eng.shadowrot.y = 0.7;
        eng.shadowrot.x = -0.7;
        eng.beginShadowPass();

        retro.pos.z = 0;
        retro.Draw(eng);
        retro.pos.z = -20;
        retro.Draw(eng);
        retro.pos.z = -40;
        retro.Draw(eng);

        eng.beginFrame();

        retro.pos.z = 0;
        retro.Draw(eng);
        retro.pos.z = -20;
        retro.Draw(eng);
        retro.pos.z = -40;
        retro.Draw(eng);

        eng.endFrame(drawFrame, now);
    }
    drawFrame();
}

window.onload = main;
