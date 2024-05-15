// import "./App.css";

// import { CollapsibleBox } from "./components/Collapsable-box/collapsibleBox";
// import { MoveableDiv } from "./components/MoveableDiv/MoveableDiv";
import { Provider } from "react-redux";
import { store } from "./components/Redux-CurdApp/store";
import { ReduxCurdApp } from "./components/Redux-CurdApp/ReduxCurdApp";

// import { SearchableDropDown } from "./components/Searchable-dropDown/SearchableDropDown";

// import { NavigationToggle } from "./components/Navigation-Toggle/Navigation";
// import { Explorer } from "./components/explorer-folder/explorer";
// import { data } from "./components/explorer-folder/data";
// import { Stopwatch } from "./components/stopwatch/stopwatch";
// import { ScrollAction } from "./components/scroll-action/scrollAction";
// import { TrafficLight } from "./components/Trafficlight/TrafficLight";

// import { TagInput } from "./components/TagInputs/TagInput";

// import { CircleBox } from "./components/CircleBox/CircleBox";

// import { FormDynamic } from "./components/Dynamic-form/Form";
// import { ImageSlider } from "./components/image-slider/imageSlider";

// import { CurrencyConverterHomePage } from "./components/currency-converter";

// import { ShoppingApp } from "./components/shopping-cart-app/pages/Main";

// import { FoodRecipeApp } from "./components/food-recipe-app";

// import { TicTacToe } from "./components/tic-tac-toe";

// import { ModalPopUps } from "./components/custom-modal-pops/modal-text";

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
    <Provider store={store}>
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
        {/* <ModalPopUps /> */}
        {/* <TicTacToe /> */}
        {/* <FoodRecipeApp /> */}
        {/* <ShoppingApp /> */}
        {/* <CurrencyConverterHomePage /> */}
        {/* <ImageSlider /> */}
        {/* <FormDynamic /> */}
        {/* <CircleBox /> */}
        {/* <TagInput /> */}
        {/* <TrafficLight /> */}
        {/* <NavigationToggle /> */}
        {/* <ScrollAction /> */}
        {/* <Explorer data={data} /> */}
        {/* <Stopwatch /> */}
        {/* <SearchableDropDown /> */}
        {/* <CollapsibleBox /> */}
        {/* <MoveableDiv /> */}
        <ReduxCurdApp />
      </div>
    </Provider>
  );
}

export default App;
