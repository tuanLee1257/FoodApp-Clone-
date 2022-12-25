import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];
function RestaurantItem({ restaurantData }) {
  return (
    <>
      {restaurantData.map((restaureant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={{ marginBottom: 20 }}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaureant.image_url} />
            <RestaurantInfo
              rating={restaureant.rating}
              name={restaureant.name}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

export default RestaurantItem;
const RestaurantImage = (props) => (
  <View>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ height: 200, width: "100%" }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 10 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </View>
);
const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
