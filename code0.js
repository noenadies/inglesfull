gdjs.s2Code = {};


gdjs.s2Code.GDfondoObjects1= [];
gdjs.s2Code.GDfondoObjects2= [];
gdjs.s2Code.GDt1Objects1= [];
gdjs.s2Code.GDt1Objects2= [];
gdjs.s2Code.GDllegada2Objects1= [];
gdjs.s2Code.GDllegada2Objects2= [];
gdjs.s2Code.GDt1fObjects1= [];
gdjs.s2Code.GDt1fObjects2= [];
gdjs.s2Code.GDtm1Objects1= [];
gdjs.s2Code.GDtm1Objects2= [];
gdjs.s2Code.GDtm2Objects1= [];
gdjs.s2Code.GDtm2Objects2= [];
gdjs.s2Code.GDtm3Objects1= [];
gdjs.s2Code.GDtm3Objects2= [];
gdjs.s2Code.GDcontar2Objects1= [];
gdjs.s2Code.GDcontar2Objects2= [];

gdjs.s2Code.conditionTrue_0 = {val:false};
gdjs.s2Code.condition0IsTrue_0 = {val:false};
gdjs.s2Code.condition1IsTrue_0 = {val:false};
gdjs.s2Code.conditionTrue_1 = {val:false};
gdjs.s2Code.condition0IsTrue_1 = {val:false};
gdjs.s2Code.condition1IsTrue_1 = {val:false};

gdjs.s2Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.s2Code.GDfondoObjects1.length = 0;
gdjs.s2Code.GDfondoObjects2.length = 0;
gdjs.s2Code.GDt1Objects1.length = 0;
gdjs.s2Code.GDt1Objects2.length = 0;
gdjs.s2Code.GDllegada2Objects1.length = 0;
gdjs.s2Code.GDllegada2Objects2.length = 0;
gdjs.s2Code.GDt1fObjects1.length = 0;
gdjs.s2Code.GDt1fObjects2.length = 0;
gdjs.s2Code.GDtm1Objects1.length = 0;
gdjs.s2Code.GDtm1Objects2.length = 0;
gdjs.s2Code.GDtm2Objects1.length = 0;
gdjs.s2Code.GDtm2Objects2.length = 0;
gdjs.s2Code.GDtm3Objects1.length = 0;
gdjs.s2Code.GDtm3Objects2.length = 0;
gdjs.s2Code.GDcontar2Objects1.length = 0;
gdjs.s2Code.GDcontar2Objects2.length = 0;


{


gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(-1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{


gdjs.s2Code.condition0IsTrue_0.val = false;
{
{gdjs.s2Code.conditionTrue_1 = gdjs.s2Code.condition0IsTrue_0;
gdjs.s2Code.conditionTrue_1.val = context.triggerOnce(208548884);
}
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "oh1.ogg", true, 100, 1);
}}

}


{



}


{

gdjs.s2Code.GDllegada2Objects1.createFrom(runtimeScene.getObjects("llegada2"));
gdjs.s2Code.GDtm1Objects1.createFrom(runtimeScene.getObjects("tm1"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("llegada2", gdjs.s2Code.GDllegada2Objects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("tm1", gdjs.s2Code.GDtm1Objects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "oh1.ogg", true, 100, 1);
}
{ //Subevents

{

gdjs.s2Code.GDcontar2Objects2.createFrom(runtimeScene.getObjects("contar2"));
gdjs.s2Code.GDllegada2Objects2.createFrom(gdjs.s2Code.GDllegada2Objects1);
gdjs.s2Code.GDt1Objects2.createFrom(runtimeScene.getObjects("t1"));
gdjs.s2Code.GDtm1Objects2.createFrom(gdjs.s2Code.GDtm1Objects1);
gdjs.s2Code.GDtm2Objects2.createFrom(runtimeScene.getObjects("tm2"));
gdjs.s2Code.GDtm3Objects2.createFrom(runtimeScene.getObjects("tm3"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.s2Code.GDt1Objects2.length ;i < len;++i) {
    gdjs.s2Code.GDt1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.s2Code.GDcontar2Objects2.length ;i < len;++i) {
    gdjs.s2Code.GDcontar2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.s2Code.GDtm3Objects2.length ;i < len;++i) {
    gdjs.s2Code.GDtm3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.s2Code.GDtm2Objects2.length ;i < len;++i) {
    gdjs.s2Code.GDtm2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.s2Code.GDtm1Objects2.length ;i < len;++i) {
    gdjs.s2Code.GDtm1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.s2Code.GDllegada2Objects2.length ;i < len;++i) {
    gdjs.s2Code.GDllegada2Objects2[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}

} //End of subevents
}

}


{

gdjs.s2Code.GDtm1Objects1.createFrom(runtimeScene.getObjects("tm1"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("tm1", gdjs.s2Code.GDtm1Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.s2Code.GDtm2Objects1.createFrom(runtimeScene.getObjects("tm2"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("tm2", gdjs.s2Code.GDtm2Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.s2Code.GDtm3Objects1.createFrom(runtimeScene.getObjects("tm3"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("tm3", gdjs.s2Code.GDtm3Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.s2Code.GDfondoObjects1.createFrom(runtimeScene.getObjects("fondo"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))-0.021);
}{for(var i = 0, len = gdjs.s2Code.GDfondoObjects1.length ;i < len;++i) {
    gdjs.s2Code.GDfondoObjects1[i].setScale(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.s2Code.GDt1fObjects1.createFrom(runtimeScene.getObjects("t1f"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) <= 0;
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "81;130;126");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(-1);
}{for(var i = 0, len = gdjs.s2Code.GDt1fObjects1.length ;i < len;++i) {
    gdjs.s2Code.GDt1fObjects1[i].setString("ok");
}
}{for(var i = 0, len = gdjs.s2Code.GDt1fObjects1.length ;i < len;++i) {
    gdjs.s2Code.GDt1fObjects1[i].setColor("147;255;250");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(-1);
}
{ //Subevents

{


gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "tiempo");
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "tiempo");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}

} //End of subevents
}

}


{


gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "s1", false);
}}

}


{

gdjs.s2Code.GDcontar2Objects1.createFrom(runtimeScene.getObjects("contar2"));

gdjs.s2Code.condition0IsTrue_0.val = false;
{
gdjs.s2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("contar2", gdjs.s2Code.GDcontar2Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.s2Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.s2Code.GDcontar2Objects1.length ;i < len;++i) {
    gdjs.s2Code.GDcontar2Objects1[i].setString("salio2");
    window.location.assign("https://noenadies.github.io/androidawebnotibar/");
}
}}

}

return;
}
gdjs['s2Code']= gdjs.s2Code;
