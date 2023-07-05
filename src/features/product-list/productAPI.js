// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) =>{
    const responce = await fetch("http://localhost:8080/products");
    const data = await responce.json();
    resolve({data})
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    const responce = await fetch("http://localhost:8080/products/"+id);
    const data = await responce.json();
    resolve({data})
  }
  );
}

export function fetchProductByFilter(filter,sort,pagination) {
  
  let queryString = "";

  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString+=`${key}=${lastCategoryValue}&`

    }
  }

for(let key in sort){
  queryString+=`${key}=${sort[key]}&`
} 
console.log(pagination)
for(let key in pagination){
  queryString+=`${key}=${pagination[key]}&`

}
  return new Promise(async (resolve) =>{
    const response = await fetch("http://localhost:8080/products?"+queryString);
    const data = await response.json();
    const totalItem = await response.headers.get("X-Total-Count")
    resolve({data:{products:data,totalItem:+totalItem}})
  }
  );
}

export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const responce = await fetch("http://localhost:8080/categories");
    const data = await responce.json();
    resolve({data})
  }
  );
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const responce = await fetch("http://localhost:8080/brands");
    const data = await responce.json();
    resolve({data})
  }
  );
}