import {renderErrorPage} from './error-page';
import {renderCartPage} from './cart-page';
import {renderProductPage} from './product-page';
import {renderStorePage} from './store-page';
import {changeMainFilter, tickCheckboxes} from './filterItem';
import {IselectedFilters} from './interfaces';
import {makeSorting} from './sorting';
import {applyView} from "./view";
import {fillInput} from "./search";

const url = document.location.href;

const routes : { [key: string]: () => void } = {
  '' : renderStorePage,
  'product' : renderProductPage,
  'cart' : renderCartPage,
  'error' : renderErrorPage,
};

export const handleLocation = async() => {
  const path : string = window.location.pathname.split('/')[1];
  const route = routes[path] || routes.error;
  route();
}

export function addPathUrl(prop:string) {
  history.pushState({}, '', prop);
  handleLocation();
}

export async function parseUrl() {
  if (document.location.search == '') {
    return;
  }
  const queryParams = document.location.search.slice(1).split('&');
  
  const filter: IselectedFilters = {
    category : [],
    brand : [],
    price : {min: null, max : null},
    stock : {min: null, max : null},
    stringSearch: "",
  }

  let view = "";
  let sort = "";

  queryParams.forEach (param => {
    if (param.startsWith("category")) {
      const arr = param.split('=');
      if (arr[1] != "") {
        filter.category = arr[1].split('*');
      }
    }
    if (param.startsWith("brand")) {
      const arr = param.split('=');
      const arrResult =arr[1].split('*');
      const result = arrResult.map(item => decodeURIComponent(item)
      )
      filter.brand = result;
    }
    if (param.startsWith("price")) {
      const arr = param.split('=');
      if(arr[0].includes("min")) {
        filter.price.min = Number(arr[1]);
      }
      else {
        filter.price.max = Number(arr[1]);
      }
    }
    if (param.startsWith("stock")) {
      const arr = param.split('=');
      if(arr[0].includes("min")) {
        filter.stock.min = Number(arr[1]);
      }
      else {
        filter.stock.max = Number(arr[1]);
      }
    }
    if (param.startsWith("view")) {
      const arr = param.split('=');
      view = arr[1];
    }
    if (param.startsWith("sort")) {
      const arr = param.split('=');
      sort = arr[1];
    }
    if (param.startsWith("search")) {
      const arr = param.split('=');
      filter.stringSearch = arr[1];
    }
  })
  changeMainFilter(filter);
  fillInput(filter.stringSearch)
  makeSorting(sort);
  applyView(view);
  tickCheckboxes()
}

export function insertParam(key: string | undefined, value: string | number) {
  if (key != undefined) {
    key = encodeURIComponent(key);
    
  }
  value = encodeURIComponent(value);
  const kvp = document.location.search.slice(1).split('&');
  let i=0;
  for(; i<kvp.length; i++){
    if (kvp[i].startsWith(key + '=')) {
        let pair = kvp[i].split('=');
        if ( pair[0] == "search" || pair[0] == "sort" || pair[0] == "view" || pair[0] == "price-min" || pair[0] == "price-max" || pair[0] == "stock-min" || pair[0] == "stock-max") {
          pair[1] = value;
        }
        else {
          if (pair[1] == value) {
            pair = []
          }
          else if(pair[1].includes(value)) {
            const valueArr = pair[1].split("*");
            for (let i = 0; i < valueArr.length; i++) {
              if(valueArr[i] == value) {
                valueArr.splice(i, 1);
              }
            }
            pair[1] = valueArr.join('*')
          }
          else {
            pair[1] = pair[1] +`*${value}`;
          }
        }
        kvp[i] = pair.join('=');
        break;
    }
  }
  if(i >= kvp.length){
    kvp[kvp.length] = [key,value].join('=');
  }
  if (document.location.search== "") {
    kvp.shift();
  }
  const params = kvp.join('&');
  const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + params;
  window.history.pushState({path:newurl},'',newurl);
}

window.onpopstate = handleLocation;