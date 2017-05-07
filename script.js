const root = new TimelineMax({repeat: -1, repeatDelay: 0});

root.set('.activeChannel', {visibility: "hidden"});

for(var i = 1; i <= 7; i++) {
  const directMsg = ".dm" + i;
  root.set(directMsg, {fill: "#fff", opacity: 0.37});
}

for(var i = 1; i <= 5; i++) {
  const topLine = ".top-" + i;
  const bottomLine = ".bottom-" + i;
  const avatar = ".Avatar-" + i;
  root.set(topLine, {visibility: "hidden"});
  root.set(bottomLine, {visibility: "hidden"});
  root.set(avatar, {visibility: "hidden"});
}

const getRandom = function() {
  return Math.floor((Math.random() * 7) + 1);
}

const triggerMsg = function() {
  const msg = new TimelineMax();
  const onlineUsers = getRandom();

  for(let i = 0; i < onlineUsers; i++) {
      const random = getRandom();
      const directMsg = ".dm" + random;

      root.to(directMsg, 0.5, {fill : "#52B98C", opacity: 1});
  }

  root.set(".activeChannel", {visibility: "visible"});
  root.fromTo(".activeChannel", 0.5, {scaleX: 0, scaleY: 0}, {scaleX: 1.2, scaleY: 1.2});
  root.fromTo(".activeChannel", 0.25, {scaleX: 1.2 , scaleY: 1.2}, {scaleX: 1,scaleY: 1});

  return msg;
}

const triggerChat = function() {
  const chat = new TimelineMax();

  root.set(".Avatar-1", {visibility: "visible"});
  root.from(".Avatar-1", 0.5, {y: -200});
  root.set(".top-1", {visibility: "visible"});
  root.fromTo(".top-1", 0.5, {scaleX: 0}, {scaleX: 1});
  root.set(".bottom-1", {visibility: "visible"}, "-=0.25");
  root.fromTo(".bottom-1", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25");

  chat.add("shift1");

  // Chat 2
  root.set(".Avatar-2", {visibility: "visible"}, "shift1");
  root.from(".Avatar-2", 0.5, {y: -200}, "shift1");

  root.to(".Avatar-1", 0.5, {y: 110}, "shift1");
  root.to(".top-1", 0.5, {y: 110}, "shift1");
  root.to(".bottom-1", 0.5, {y: 110}, "shift1");

  root.set(".top-2", {visibility: "visible"});
  root.fromTo(".top-2", 0.5, {scaleX: 0}, {scaleX: 1});
  root.set(".bottom-2", {visibility: "visible"}, "-=0.25");
  root.fromTo(".bottom-2", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25");

  chat.add("shift2");

  // Chat 3
  root.set(".Avatar-3", {visibility: "visible"}, "shift2");
  root.from(".Avatar-3", 0.5, {y: -200}, "shift2");

  root.to(".Avatar-2", 0.5, {y: 110}, "shift2");
  root.to(".top-2", 0.5, {y:110}, "shift2");
  root.to(".bottom-2", 0.5, {y: 110}, "shift2");

  root.to(".Avatar-1", 0.5, {y: 210}, "shift2");
  root.to(".top-1", 0.5, {y: 210}, "shift2");
  root.to(".bottom-1", 0.5, {y: 210}, "shift2");

  root.set(".top-3", {visibility: "visible"});
  root.fromTo(".top-3", 0.5, {scaleX: 0}, {scaleX: 1});
  root.set(".bottom-3", {visibility: "visible"}, "-=0.25");
  root.fromTo(".bottom-3", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25");

  chat.add("shift3");

  // Chat 4
  root.set(".Avatar-4", {visibility: "visible"}, "shift3");
  root.from(".Avatar-4", 0.5, {y: -200}, "shift3");

  root.to(".Avatar-3", 0.5, {y: 110}, "shift3");
  root.to(".top-3", 0.5, {y:110}, "shift3");
  root.to(".bottom-3", 0.5, {y: 110}, "shift3");

  root.to(".Avatar-2", 0.5, {y: 210}, "shift3");
  root.to(".top-2", 0.5, {y:210}, "shift3");
  root.to(".bottom-2", 0.5, {y: 210}, "shift3");

  root.to(".Avatar-1", 0.5, {y: 310}, "shift3");
  root.to(".top-1", 0.5, {y: 310}, "shift3");
  root.to(".bottom-1", 0.5, {y: 310}, "shift3");

  root.set(".top-4", {visibility: "visible"});
  root.fromTo(".top-4", 0.5, {scaleX: 0}, {scaleX: 1});
  root.set(".bottom-4", {visibility: "visible"}, "-=0.25");
  root.fromTo(".bottom-4", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25");

  chat.add("chat4");

  // Chat 5
  root.set(".Avatar-5", {visibility: "visible"}, "shift4");
  root.from(".Avatar-5", 0.5, {y: -200}, "shift4");

  root.to(".Avatar-4", 0.5, {y: 110}, "shift4");
  root.to(".top-4", 0.5, {y:110}, "shift4");
  root.to(".bottom-4", 0.5, {y: 110}, "shift4");

  root.to(".Avatar-3", 0.5, {y: 210}, "shift4");
  root.to(".top-3", 0.5, {y:210}, "shift4");
  root.to(".bottom-3", 0.5, {y: 210}, "shift4");

  root.to(".Avatar-2", 0.5, {y: 310}, "shift4");
  root.to(".top-2", 0.5, {y:310}, "shift4");
  root.to(".bottom-2", 0.5, {y: 310}, "shift4");

  root.to(".Avatar-1", 0.5, {y: 410}, "shift4");
  root.to(".top-1", 0.5, {y: 410}, "shift4");
  root.to(".bottom-1", 0.5, {y: 410}, "shift4");

  root.set(".top-5", {visibility: "visible"});
  root.fromTo(".top-5", 0.5, {scaleX: 0}, {scaleX: 1});
  root.set(".bottom-5", {visibility: "visible"}, "-=0.25");
  root.fromTo(".bottom-5", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25");

  return chat;
}

root.add(triggerMsg());
root.add(triggerChat());
root.timeScale(1.1);
