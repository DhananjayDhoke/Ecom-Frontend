// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) =>{
    const responce = await fetch("http://localhost:8080/products");
    const data = await responce.json();
    resolve({data})
  }
  );
}


export function fetchProductByFilter(filter) {
  
  let queryString = "";

  for(let key in filter){
    queryString+=`${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) =>{
    const responce = await fetch("http://localhost:8080/products?"+queryString);
    const data = await responce.json();
    resolve({data})
  }
  );
}