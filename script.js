const translations = {
  en: {
    navResearch:"Research",navPubs:"Publications",navProjects:"Projects",navAbout:"About",navContact:"Contact",
    kicker:"PHD RESEARCHER · COMBUSTION · TRANSPORT PHENOMENA",
    heroLead:"I investigate how alternative-fuel droplets undergo phase transition, evaporation and multicomponent transport under high-pressure and high-temperature conditions.",
    explore:"Explore research",cv:"Download CV",portraitCaption:"PhD Researcher",
    statement:"From <strong>molecules</strong> to <strong>interfaces</strong>, from <strong>droplets</strong> to <strong>combustion</strong>.",
    researchTitle:"Research",researchIntro:"My work connects molecular simulation, thermodynamics, transport theory and experiments to understand fuel droplets in extreme thermodynamic environments.",
    r1title:"Molecular dynamics",r1text:"Atomistic investigation of NH₃, CH₃OH and conventional fuel droplets under high-pressure and high-temperature conditions.",
    r2title:"Phase transition",r2text:"Mechanisms and criteria for supercritical and transcritical phase transition, including dissolution, hydrogen bonding and non-equilibrium effects.",
    r3title:"Interfacial transport",r3text:"Non-equilibrium vapor–liquid equilibrium and interfacial mass transfer in multicomponent gaseous environments.",
    r4title:"Droplet evaporation",r4text:"0D and continuum droplet models for evaporation, diffusion and thermal response at elevated pressure and temperature.",
    r5title:"High-pressure transport",r5text:"Evaluation of binary diffusion correlations and high-pressure corrections for fuel–gas systems.",
    r6title:"Alternative-fuel combustion",r6text:"Transport physics of polar and alternative fuels relevant to advanced high-pressure combustion systems.",
    pipeline:"A multiscale approach linking microscopic molecular interactions with macroscopic transport behavior.",
    pubTitle:"Selected publications",pubIntro:"Replace the placeholders below with your final bibliographic information, DOI and journal links.",
    pub1:"Mechanistic study of fuel-droplet phase transition under supercritical conditions.",pub2:"Multicomponent phase equilibrium and non-equilibrium interfacial transport of methanol droplets.",pub3:"Add your published papers here with journal, volume, pages and DOI.",
    projectTitle:"Research projects",projectIntro:"Selected research directions developed across simulation, modeling and experiments.",
    p1:"NH₃ and CH₃OH under high-pressure shock and heating conditions.",p2:"Phase equilibrium and interfacial transport in multicomponent environments.",p3:"Experimental investigation of suspended fuel droplets at elevated pressure and temperature.",
    aboutTitle:"About",aboutLead:"I am a PhD researcher at Tsinghua University working on high-pressure combustion and alternative fuels.",aboutText:"My research combines molecular dynamics, thermodynamic modeling, transport theory and experiments to investigate phase transition, dissolution, diffusion and evaporation of fuel droplets.",
    contactTitle:"Let's discuss research.",contactText:"For collaboration, academic exchange, visiting opportunities or research discussion, feel free to get in touch."
  },
  zh: {
    navResearch:"研究方向",navPubs:"论文",navProjects:"研究项目",navAbout:"关于我",navContact:"联系",
    kicker:"博士研究生 · 燃烧 · 输运现象",
    heroLead:"研究高温高压条件下替代燃料液滴的相变、蒸发及多组分传输机制。",
    explore:"探索研究",cv:"下载 CV",portraitCaption:"博士研究生",
    statement:"从<strong>分子</strong>到<strong>界面</strong>，从<strong>液滴</strong>到<strong>燃烧</strong>。",
    researchTitle:"研究方向",researchIntro:"通过分子模拟、热力学、传输理论与实验，研究极端热力学环境中的燃料液滴输运物理。",
    r1title:"分子动力学",r1text:"研究 NH₃、CH₃OH 及传统燃料液滴在高温高压条件下的分子尺度行为。",
    r2title:"相变机制",r2text:"研究超临界/跨临界相变、溶解、氢键及非平衡效应。",
    r3title:"界面输运",r3text:"研究多组分气体环境下的非平衡气液相平衡与界面传质。",
    r4title:"液滴蒸发",r4text:"建立高压高温条件下液滴蒸发、扩散与热响应模型。",
    r5title:"高压输运",r5text:"研究燃料–气体体系二元扩散关联式及高压修正。",
    r6title:"替代燃料燃烧",r6text:"研究极性及替代燃料在先进高压燃烧系统中的输运物理。",
    pipeline:"建立从微观分子相互作用到宏观输运行为的多尺度研究框架。",
    pubTitle:"代表性论文",pubIntro:"请将下方占位信息替换为最终论文题目、期刊、DOI 等。",
    pub1:"高压超临界条件下燃料液滴相变机制研究。",pub2:"多组分气体环境中甲醇液滴跨临界混合与非平衡界面输运。",pub3:"在这里添加你的正式发表论文、期刊和 DOI。",
    projectTitle:"研究项目",projectIntro:"涵盖分子模拟、理论模型与实验的代表性研究方向。",
    p1:"高压冲击与加热条件下 NH₃ 和 CH₃OH 液滴研究。",p2:"多组分环境下气液相平衡与界面输运。",p3:"高温高压条件下悬浮液滴蒸发实验研究。",
    aboutTitle:"关于我",aboutLead:"清华大学博士研究生，主要从事高压燃烧与替代燃料研究。",aboutText:"研究结合分子动力学、热力学建模、传输理论与实验，研究燃料液滴的相变、溶解、扩散和蒸发。",
    contactTitle:"欢迎交流科研合作。",contactText:"欢迎就科研合作、学术交流、访问研究及相关问题联系我。"
  }
};

let lang = "en";
document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  document.getElementById("langBtn").textContent = lang === "en" ? "中文" : "EN";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
});
