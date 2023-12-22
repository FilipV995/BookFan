// import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import CustomTextInput from "../components/CustomTextInput";
// import CustomButton from "../components/CustomButton";

// const height = Dimensions.get("screen").height;
// const width = Dimensions.get("screen").width;

// export default function FavouritesScreen() {
//   const validationSchema = {
//     extra: Yup.string().required("This field is required"),
//     subject: Yup.string().required("Subject is required"),
//   };

//   const formik = useFormik({
//     initialValues: {
//       extra: "",
//       required: "",
//       subject: "",
//       //those names will be changed after they finilise the design
//       subject1: "",
//       subject2: "",
//       subject3: "",
//       subject4: "",
//     },
//     validationSchema: Yup.object().shape(validationSchema),
//     validateOnChange: false, // Do not validate on change
//     validateOnBlur: false, // Do not validate on blur
//     onSubmit: (values, actions) => {
//       const { extra, required, subject } = values;
//       formik.validateForm().then((errors) => {
//         if (Object.keys(errors).length === 0) {
//           // No validation errors, proceed with submission
//           const { extra, required, subject } = values;
//           // handle submit
//           // actions.resetForm();
//         } else {
//           // Validation errors, handle them as needed
//           console.log("Validation errors:", errors);
//         }
//       });
//       // handle submit
//       // actions.resetForm();
//     },
//   });
//   const handleRadioButtonPress = () => {
//     // console.log(`Selected: ${selectedOption}`);
//     // other logic for the selection
//   };

//   // const getBorderStyle = (error) => ({
//   //   height: 40,
//   //   borderWidth: error ? 3 : 1,
//   // });

//   const getBorderStyle = (touched, error) => ({
//     height: 40,
//     borderWidth: error ? 3 : 1,
//   });
//   return (
//     <View style={styles.innerContainer}>
//       <ScrollView bounces={true}>
//         <View style={styles.formikContainer}>
//           <CustomTextInput
//             value={formik.values.extra}
//             onChangeText={formik.handleChange("extra")}
//             customStyle={getBorderStyle(
//               formik.touched.extra,
//               formik.errors.extra
//             )}
//           />
//           {formik.errors.extra && (
//             <Text style={styles.errorMessage}>{formik.errors.extra}</Text>
//           )}

//           <CustomTextInput
//             value={formik.values.subject}
//             onChangeText={formik.handleChange("subject")}
//             customStyle={getBorderStyle(
//               formik.touched.subject,
//               formik.errors.subject
//             )}
//           />
//           {formik.errors.subject && (
//             <Text style={styles.errorMessage}>{formik.errors.subject}</Text>
//           )}
//         </View>
//         <View style={styles.button}>
//           <CustomButton
//             backgroundColor={"red"}
//             title={"press"}
//             onPress={formik.handleSubmit}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   imageBackground: {
//     width,
//     height,
//     justifyContent: "center",
//   },
//   innerContainer: {
//     height: height * 0.9,
//     width,
//     backgroundColor: "white",
//   },
//   button: {
//     alignSelf: "center",
//     marginVertical: 20,
//   },
//   formikContainer: {
//     marginLeft: 20,
//     marginRight: 40,
//     paddingRight: 2,
//   },
//   subtitle: {
//     color: "red",
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   circleContainer: {
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     // backgroundColor: Theme.Colors.yellowColor,
//     alignSelf: "center",
//     marginRight: 15,
//     marginTop: 17,
//     alignItems: "center",
//     justifyContent: "center",
//     maxHeight: 150,
//     maxWidth: 150,
//   },
//   modalContainer: {
//     flexDirection: "row",
//     marginRight: -40,
//   },
//   inputContainer: {
//     flex: 1,
//     marginRight: 7,
//   },
//   errorMessage: {
//     color: "red",
//     fontWeight: "bold",
//     fontStyle: "italic",
//     fontSize: 10,
//     marginVertical: 4,
//   },
// });

import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OverviewItem from "../components/OverviewItem";
import { useAuth } from "../context/AuthStateContext";

export default function FavouritesScreen() {
  const { allBooks } = useAuth();

  const [favouriteBooks, setFavouriteBooks] = useState();

  const getFavouriteBooks = () => {
    const filteredBooks = allBooks.filter((book) => book.isFavourite === true);
    setFavouriteBooks(filteredBooks);
  };

  useEffect(() => {
    getFavouriteBooks();
  }, [allBooks]);

  const onPressHandler = () => {
    console.log("PRESSED");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteBooks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OverviewItem
            book={item}
            onPress={onPressHandler}
            onAddToFavorites={() => onAddToFavoritesHandler(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,

    flex: 1,
  },
});
