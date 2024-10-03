///            DEVELOPED BY AMAN MANTHIRA       /////
///            SOFTWARE ENGINEER @ AMECTAR      /////
///            CONTACT= +94 741800901           /////

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import productsData from '../../assets/data/products.json'; // Adjust the path as needed
import { useCart } from '../CartContext'; // Import your custom hook

const bannerImage = require('../../assets/images/vdio.gif'); // Banner image
const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [priceFilter, setPriceFilter] = useState('All');
  const [sizeFilter, setSizeFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const { addToCart } = useCart(); // Get addToCart function from context

  useEffect(() => {
    // Initialize products with parsed prices
    const parsedProducts = productsData.map(product => ({
      ...product,
      priceNumeric: parseInt(product.price.replace('LKR', '').trim(), 10), // Convert price to number
    }));
    setProducts(parsedProducts);
  }, []);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const filterAndSortProducts = () => {
    let filteredProducts = products;

    // Apply size filter
    if (sizeFilter !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.size === sizeFilter);
    }

    // Sort by price
    if (priceFilter === 'Low to High') {
      filteredProducts = filteredProducts.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (priceFilter === 'High to Low') {
      filteredProducts = filteredProducts.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }

    return filteredProducts;
  };

  // Slice the products array for different sections
  const featuredProducts = products.slice(0, 5);
  const flashSaleProducts = products.slice(5, 10);
  const newArrivals = products.slice(10, 15);
  const allProducts = filterAndSortProducts(); // Apply filter and sort to all products

  const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => handleProductPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.gridImage} />
      <Text style={styles.gridProductName}>{item.name}</Text>
      <Text style={styles.gridProductPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewCard}>
      <Text style={styles.reviewComment}>{item}</Text>
    </View>
  );
  /*const handleAddToCart = () => {
    if (selectedProduct) {
      const exists = cart.some(item => item.id === selectedProduct.id);
      if (!exists) {
        setCart([...cart, selectedProduct]);
      }
      alert(`${selectedProduct.name} added to cart`);
    }
  };*/
  const navigateToCart = () => {
    navigation.push('./cart', { cart });
  };
  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // Add item to cart using context function
      closeModal();
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Banner Section */}
        <Image source={bannerImage} style={styles.bannerImage} />

       

        {/* Categories Section */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Dog Toys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Shampoo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Nutrition</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Products Section */}
        <View style={styles.productsContainer}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsScroll}>
            {featuredProducts.map((product) => (
              <TouchableOpacity 
                key={product.id} 
                style={styles.productCard}
                onPress={() => handleProductPress(product)}
              >
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Flash Sale Section */}
        <View style={styles.flashSaleContainer}>
          <Text style={styles.flashSaleTitle}>Flash Sale!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashSaleScroll}>
            {flashSaleProducts.map((product) => (
              <TouchableOpacity 
                key={product.id} 
                style={styles.flashSaleCard}
                onPress={() => handleProductPress(product)}
              >
                <Image source={{ uri: product.image }} style={styles.flashSaleImage} />
                <Text style={styles.flashSaleName}>{product.name}</Text>
                <Text style={styles.flashSalePrice}>{product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* New Arrivals Section */}
        <View style={styles.newArrivalsContainer}>
          <Text style={styles.newArrivalsTitle}>New Arrivals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newArrivalsScroll}>
            {newArrivals.map((product) => (
              <TouchableOpacity 
                key={product.id} 
                style={styles.newArrivalCard}
                onPress={() => handleProductPress(product)}
              >
                <Image source={{ uri: product.image }} style={styles.newArrivalImage} />
                <Text style={styles.newArrivalName}>{product.name}</Text>
                <Text style={styles.newArrivalPrice}>{product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
 {/* Filters Section */}
 <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Filter by Price:</Text>
          <View style={styles.filterButtons}>
            {['All', 'Low to High', 'High to Low'].map((option) => (
              <TouchableOpacity 
                key={option} 
                style={[styles.filterButton, priceFilter === option && styles.selectedFilter]}
                onPress={() => setPriceFilter(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.filterTitle}>Filter by Size:</Text>
          <View style={styles.filterButtons}>
            {['All', 'Small', 'Medium', 'Large'].map((option) => (
              <TouchableOpacity 
                key={option} 
                style={[styles.filterButton, sizeFilter === option && styles.selectedFilter]}
                onPress={() => setSizeFilter(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* All Products Section */}
        <View style={styles.allProductsContainer}>
          <Text style={styles.sectionTitle}>All Products</Text>
          <FlatList
            data={allProducts}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      </ScrollView>

      {/* Product Detail Modal */}
      <Modal
  transparent={true}
  visible={isModalVisible}
  animationType="slide"
  onRequestClose={closeModal}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <ScrollView contentContainerStyle={styles.modalScrollContent}>
        {selectedProduct && (
          <>
            <Image source={{ uri: selectedProduct.image }} style={styles.modalImage} />
            <Text style={styles.modalName}>{selectedProduct.name}</Text>
            <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
            <Text style={styles.modalDescription}>{selectedProduct.description}</Text>

            {/* Reviews Section */}
            <View style={styles.reviewsContainer}>
              <Text style={styles.reviewsTitle}>Customer Reviews</Text>
              <FlatList
                data={selectedProduct.reviews}
                renderItem={renderReviewItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* Add to Cart Button */}
            <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </Pressable>
          </>
        )}
        <Pressable style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
      </ScrollView>
    </View>
  </View>
</Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  filtersContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  selectedFilter: {
    backgroundColor: '#007bff',
  },
  categoriesContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    margin: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
  productsContainer: {
    padding: 16,
  },
  productsScroll: {
    flexDirection: 'row',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 16,
    padding: 8,
    width: 150,
    alignItems: 'center',
  },
  productImage: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  flashSaleContainer: {
    padding: 16,
    backgroundColor: '#ffeb3b',
    borderRadius: 8,
    marginVertical: 16,
  },
  flashSaleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 8,
  },
  flashSaleScroll: {
    flexDirection: 'row',
  },
  flashSaleCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 16,
    padding: 8,
    width: 150,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d32f2f',
  },
  flashSaleImage: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  flashSaleName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  flashSalePrice: {
    fontSize: 14,
    color: '#d32f2f',
  },
  newArrivalsContainer: {
    padding: 16,
  },
  newArrivalsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newArrivalsScroll: {
    flexDirection: 'row',
  },
  newArrivalCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 16,
    padding: 8,
    width: 150,
    alignItems: 'center',
  },
  newArrivalImage: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  newArrivalName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  newArrivalPrice: {
    fontSize: 14,
    color: '#888',
  },
  allProductsContainer: {
    padding: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    width: '48%',
  },
  gridImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  gridProductName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  gridProductPrice: {
    fontSize: 14,
    color: '#888',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '90%',
    maxHeight: '80%',
  },
  modalScrollContent: {
    padding: 16,
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  modalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  modalPrice: {
    fontSize: 16,
    color: '#888',
  },
  modalDescription: {
    fontSize: 14,
    marginVertical: 8,
  },
  reviewsContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  reviewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  reviewComment: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  closeButton: {
    marginVertical: 16,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    marginVertical: 16,
    padding: 12,
    backgroundColor: '#28a745',
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default Home;
