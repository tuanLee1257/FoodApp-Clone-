import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "x3oT1Rle1IO6SkTqK-MExm2HimZUQhV8FNBNFI_lv6-qefeJh9DiaRiCBVTnDl6BpNmx51A2TaJQozpCc2fTNqhvoZv75kxsDmwI--eHxt3u0VTRTEMd-zC4xeunY3Yx";
function Home(props) {
  const [restaurantData, setRestaurantData] = useState([]);
  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood";
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eeee",
        flex: 1,
        paddingTop: Platform.OS == "ios" ? 0 : 25,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
