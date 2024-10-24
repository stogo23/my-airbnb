// import { FlatList,ImageBackground,View,Text,StyleSheet } from 'react-native';
// import houseList from '@/assets/datas/datas-appartement.json';
// import AntDesign from '@expo/vector-icons/AntDesign';


// const page = () => {
//     return (<FlatList 
//         data={houseList} 
//         horizontal={true}
//         contentContainerStyle={styles.flatListContainer}
//         renderItem={({ item }) => (
//           <View style={styles.imageBlock}>
//             <ImageBackground 
//               source={{ uri: item.cover_image_url }} 
//               resizeMode="cover"
//               style={styles.ImageBackground}
//             >
//               <View style={{ flexDirection: "row" }}>
//                 <View style={styles.tag}>
//                   <Text style={styles.tagText}>Enregistrer Nouvellement</Text>
//                 </View>
//               </View>
//             </ImageBackground>
              
//             <View style={styles.infoContainer}>
//               <Text style={styles.cityText}>{item.location_city}</Text> {/* Nom de la ville */}
//               <Text style={styles.priceText}>{item.month_price} $/mois</Text> {/* Prix en dessous */}
//               <View style={styles.rowBetween}>
//                 <View style={styles.tagContainer}>
//                   <Text style={styles.tagNoteText}>5.0</Text>
//                   <AntDesign name="star" size={24} color="#ff9e81" />
    
//                    <View style={styles.tagContainer}>
//                    <AntDesign name="user" size={24} color="#ff9e81" />
//                    <Text style={styles.tagNoteText }>3 visites</Text>
//                    </View>
                  
//                 </View>
//               </View>
//             </View>
//           </View>
//         )}
//         keyExtractor={(item) => item.cover_image_url.toLowerCase().toString() + Math.floor(Math.random() * 1000)}
//       />) 
// };
//   const styles=StyleSheet.create({

//   });
// export default page;
import { FlatList, ImageBackground, View, Text, StyleSheet } from 'react-native'; // Ajoutez StyleSheet ici
import houseList from '@/assets/datas/datas-appartement.json';
import AntDesign from '@expo/vector-icons/AntDesign';

const AppartementList = () => {  // Renommez aussi le composant en suivant les conventions
  return (
    <FlatList 
      data={houseList} 
      horizontal={true}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({ item }) => (
        <View style={styles.imageBlock}>
          <ImageBackground 
            source={{ uri: item.cover_image_url }} 
            resizeMode="cover"
            style={styles.ImageBackground}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Enregistrer Nouvellement</Text>
              </View>
            </View>
          </ImageBackground>
          
          <View style={styles.infoContainer}>
            <Text style={styles.cityText}>{item.location_city}</Text> {/* Nom de la ville */}
            <Text style={styles.priceText}>{item.month_price} $/mois</Text> {/* Prix en dessous */}
            <View style={styles.rowBetween}>
              <View style={styles.tagContainer}>
                <Text style={styles.tagNoteText}>5.0</Text>
                <AntDesign name="star" size={24} color="#ff9e81" />

                <View style={styles.tagContainer}>
                  <AntDesign name="user" size={24} color="#ff9e81" />
                  <Text style={styles.tagNoteText}>3 visites</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.cover_image_url.toLowerCase().toString() + Math.floor(Math.random() * 1000)}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 20,
    marginLeft: 15,
    paddingRight: 40,
  },
  imageBlock: {
    width: 320,
    gap: 10,
  },
  ImageBackground: {
    height: 200,
    borderRadius: 30,
    overflow: 'hidden',
    padding: 15,
  },
  tag: {
    padding: 5,
    backgroundColor: '#4e5ac8',
    opacity: 0.9,
    borderRadius: 30,
  },
  tagText: {
    color: 'white',
    padding: 4,
  },
  infoContainer: {
    paddingVertical: 10,
  },
  cityText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 18,
    color: 'gray',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagContainer: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 5,
    padding: 5,
  },
  tagNoteText: {
    color: 'black',
    fontSize: 20,
  },
});

export default AppartementList;  // Utilisez un nom de composant cohérent
