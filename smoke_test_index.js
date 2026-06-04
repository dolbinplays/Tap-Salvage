const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];

const elements = new Map();
const makeElement = (id = "", dataset = {}) => ({
  id,
  dataset,
  innerHTML: "",
  textContent: "",
  disabled: false,
  classList: { add(){}, remove(){}, toggle(){} },
  addEventListener(){},
});

global.localStorage = {
  store: {},
  getItem(key){ return this.store[key] || null; },
  setItem(key, value){ this.store[key] = String(value); },
  removeItem(key){ delete this.store[key]; },
};
global.confirm = () => true;
global.console = console;
global.window = {};
global.document = {
  getElementById(id){
    if(!elements.has(id)) elements.set(id, makeElement(id));
    return elements.get(id);
  },
  querySelectorAll(selector){
    if(selector === ".screen"){
      return [makeElement(), makeElement(), makeElement()];
    }
    if(selector === ".tab"){
      return [makeElement("", {screen:"base"}), makeElement("", {screen:"salvage"}), makeElement("", {screen:"inventory"})];
    }
    return [];
  },
};

const test = `
showScreen('salvage');
for(let i=0;i<8;i++) revealTile(i);
openSummary();
mockDoubleSalvage();
claimRun();
repairRoom('workshop');
mockEmergencyCrate();
claimDailyCrate();
showScreen('inventory');
if(state.stats.runs !== 1) throw new Error('run counter failed');
if(state.stats.doubleAds !== 1) throw new Error('double ad counter failed');
if(state.stats.mockAds < 2) throw new Error('mock ad counter failed');
if(state.stats.dailyCrates !== 1) throw new Error('daily crate counter failed');
if(!document.getElementById('metricsPanel').innerHTML.includes('Best run')) throw new Error('metrics did not render');
if(!document.getElementById('achievementsPanel').innerHTML.includes('First Haul')) throw new Error('achievements did not render');
console.log('smoke test passed');
`;

new Function(script.replace(/load\(\);render\(\);\s*$/, "") + "\nload();render();\n" + test)();
