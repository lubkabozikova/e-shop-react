import URL from "./URL";

async function FetchHandler(method, items, item) {
  try {
    let response = null;
    if (method === "GET") {
      response = await fetch(URL + items + ".json");
    }
    if (method === "POST") {
      response = await fetch(URL + items + ".json", {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      });
    }
    if (method === "DELETE") {
      response = await fetch(URL + items + "/" + item + ".json", {
        method: "DELETE",
      });
    }

    if (!response.ok) {
      throw new Error(
        "You probably don't have the right url. Try switching to BackendContextProvider-alt in the file index.js."
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {}
}

export default FetchHandler;
