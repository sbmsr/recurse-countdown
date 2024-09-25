import batches from "./batches.json" with { type: "json" };

const getBatchFromQueryParams = () => {
  // check query params
  const urlParams = new URLSearchParams(self.location.search);
  const batchParam = urlParams.get("batch")
  const batchName = decodeURI(batchParam)

  const batch = batches.find(({name}) => name === batchName);

  if (batch === undefined) {
    self.alert("Invalid Batch Provided.")
  }

  return batch;
}

const dateToUnixTimestamp = (date) => {
  return Math.floor(date.getTime()/1000)
}

const computePercentLeft = (batch) => {
  let startTimestamp = dateToUnixTimestamp(new Date(batch.start));
  let endTimestamp = dateToUnixTimestamp(new Date(batch.end));
  let nowTimestamp = dateToUnixTimestamp(new Date());

  let percentage = Math.floor(((nowTimestamp - startTimestamp) / (endTimestamp - startTimestamp)) * 100)
  
  return percentage
}

self.addEventListener("load", () => {  
  const batch = getBatchFromQueryParams();
  const percentage = computePercentLeft(batch);
  document.getElementById("percentage").textContent = percentage;
});
