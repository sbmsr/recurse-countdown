import batches from "./batches.js";

self.addEventListener("load", () => {
  const activeBatches = batches.filter(({ start, end }) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const now = new Date();
    return startDate < now && endDate > now;
  });
  const batchNames = activeBatches.map(({ name }) => name);
  const batchCountdownUrls = batchNames.map((name) => {
    return (new URL(self.location).href += `countdown.html?batch=${encodeURI(name)}`);
  });
  let html = "";
  batchCountdownUrls.forEach((url, idx) => {
    html += `<a href="${url}">${batchNames[idx]}</a> <br />`;
  });
  document.getElementById("links").innerHTML = html;
});
