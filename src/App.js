import "./App.css";
import { ModalPopUps } from "./components/custom-modal-pops/modal-text";

// import { LightDarkTheme } from "./components/light-dark-theme";
// import { ScrollToTopOrBottom } from "./components/scrollTotopAndscrollTobottom";
// import { Treeview } from "./components/tree-view";
// import { treeData } from "./components/tree-view/data";
// import { LoadMoreButton } from "./components/loadMoreButton";
// import { ScrollIndicator } from "./components/scroll-indcator";
// import { SearchBox } from "./components/search-autocomplete";
// import StarRating from "./components/star-rating";
// import { Accordian } from "./components/accrodian";
// import { Customhook } from "./components/customHooks";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <Customhook /> */}
      {/* <SearchBox /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit-100"} /> */}
      {/* <LoadMoreButton /> */}
      {/* <Treeview menu={treeData} /> */}
      {/* <ScrollToTopOrBottom /> */}
      {/* <LightDarkTheme /> */}
      <ModalPopUps />
    </div>
  );
}

export default App;
