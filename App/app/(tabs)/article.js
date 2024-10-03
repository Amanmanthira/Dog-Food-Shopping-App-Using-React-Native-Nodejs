import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

const { width } = Dimensions.get('window');

const DogArticle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>The Majestic World of Dogs</Text>
        <Text style={styles.subtitle}>Breeds, Specifications, and Their Fascinating History</Text>

        <Image
          style={styles.headerImage}
          source={require('../../assets/images/dog banner.jpg')} // Local image path
        />

        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.paragraph}>
          Dogs have held a special place in human society for thousands of years. Often referred to as "man's best friend," these remarkable animals come in a wide range of breeds, each with its own unique characteristics and history. This article delves into the diverse world of dogs, exploring their specifications, the different breeds, and a brief history that showcases their evolution from wild creatures to beloved companions.
        </Text>

        <Text style={styles.sectionTitle}>The Anatomy of Dogs</Text>
        <View style={styles.card}>
          <Image
            style={styles.breedImage}
            source={require('../../assets/images/atonomy.jpg')} // Local image path
          />
          <Text style={styles.cardTitle}>Understanding Dog Anatomy</Text>
          <Text style={styles.cardText}>
            Dogs, scientifically known as Canis lupus familiaris, are incredibly diverse in terms of size, shape, and behavior. Their anatomy is adapted to a variety of functions, making them versatile companions and working animals.
          </Text>
        </View>

        <Text style={styles.subsectionTitle}>Size and Build</Text>
        <Image
          style={styles.breedImage}
          source={require('../../assets/images/size.jpg')} // Local image path
        />
        <Text style={styles.paragraph}>
          Dogs vary greatly in size, from the tiny Chihuahua to the enormous Great Dane. Their builds can range from slender and agile, like the Greyhound, to sturdy and muscular, like the Bulldog. This variety in size and build is a result of selective breeding aimed at enhancing specific traits.
        </Text>

        <Text style={styles.subsectionTitle}>Coat and Color</Text>
        <Image
          style={styles.breedImage}
          source={require('../../assets/images/coats.png')} // Local image path
        />
        <Text style={styles.paragraph}>
          The canine coat comes in various lengths and textures, including short, long, curly, and wiry. Coat colors and patterns are equally diverse, with breeds exhibiting solid colors, spots, and even merle patterns. This diversity not only adds to their aesthetic appeal but also serves functional purposes, such as insulation or camouflage.
        </Text>

        <Text style={styles.subsectionTitle}>Ears and Tails</Text>
        <Image
          style={styles.breedImage}
          source={require('../../assets/images/eyers.jpg')} // Local image path
        />
        <Text style={styles.paragraph}>
          Dogs' ears can be erect, floppy, or semi-erect, while their tails can be straight, curled, or even docked. These features can affect their overall appearance and are often linked to the breed’s historical functions and environments.
        </Text>

        <Text style={styles.subsectionTitle}>Temperament and Behavior</Text>
        <Text style={styles.paragraph}>
          Dogs display a wide range of temperaments, from the loyal and affectionate Labrador Retriever to the independent and reserved Shiba Inu. Their behavior is influenced by their breed characteristics, upbringing, and training.
        </Text>

        <Text style={styles.sectionTitle}>Popular Dog Breeds</Text>
        
        <View style={styles.card}>
          <Image
            style={styles.breedImage}
            source={require('../../assets/images/labr.jpg')} // Local image path
          />
          <Text style={styles.cardTitle}>Labrador Retriever</Text>
          <Text style={styles.cardText}>
            Known for their friendly and outgoing nature, Labrador Retrievers are excellent family pets and working dogs. They are highly trainable and often serve as guide dogs, therapy dogs, and search-and-rescue dogs.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.breedImage}
            source={require('../../assets/images/sheperd.webp')} // Local image path
          />
          <Text style={styles.cardTitle}>German Shepherd</Text>
          <Text style={styles.cardText}>
            German Shepherds are renowned for their intelligence and versatility. They excel in various roles, including police work, military service, and as loyal family companions.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.breedImage}
            source={require('../../assets/images/poddle.jpg')} // Local image path
          />
          <Text style={styles.cardTitle}>Poodle</Text>
          <Text style={styles.cardText}>
            Poodles come in three sizes—standard, miniature, and toy—and are known for their hypoallergenic coats and high intelligence. They are often seen in competitive dog sports and are great family pets.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>A Brief History of Dogs</Text>
        <Image
          style={styles.historyImage}
          source={require('../../assets/images/history.jpg')} // Local image path
        />
        <Text style={styles.paragraph}>
          The history of dogs is intertwined with human history. Evidence suggests that dogs were domesticated from wolves around 15,000 to 30,000 years ago. Early humans utilized dogs for hunting, herding, and protection. Over time, selective breeding led to the development of various breeds suited for specific tasks and environments. Today, dogs are cherished as companions, working animals, and show pets.
        </Text>
        <Text style={styles.paragraph}>
          The bond between humans and dogs has only strengthened over the centuries. From ancient times to the modern day, dogs continue to be an integral part of our lives, offering companionship, service, and joy.
        </Text>

        <Text style={styles.sectionTitle}>Dog Nutrition: What Every Pet Owner Should Know</Text>
        <Image
          style={styles.nutritionImage}
          source={require('../../assets/images/nutr.jpg')} // Local image path
        />
        <Text style={styles.paragraph}>
          Proper nutrition is essential for maintaining a dog's health and well-being. A balanced diet supports their growth, energy levels, and overall health. Key components of a dog's diet include proteins, fats, carbohydrates, vitamins, and minerals. Each of these plays a critical role in their physical and mental development.
        </Text>

        <Text style={styles.subsectionTitle}>Proteins</Text>
        <Text style={styles.paragraph}>
          Proteins are crucial for a dog's muscle development, tissue repair, and immune function. High-quality protein sources include chicken, beef, lamb, and fish. Dogs require a specific amount of protein depending on their age, size, and activity level.
        </Text>

        <Text style={styles.subsectionTitle}>Fats</Text>
        <Text style={styles.paragraph}>
          Fats provide a concentrated source of energy and are important for skin health, coat quality, and cell function. Essential fatty acids, like Omega-3 and Omega-6, support cognitive function and reduce inflammation. Sources of healthy fats include fish oil, flaxseed, and chicken fat.
        </Text>

        <Text style={styles.subsectionTitle}>Carbohydrates</Text>
        <Text style={styles.paragraph}>
          Carbohydrates provide energy and aid in digestion. Whole grains, such as brown rice and barley, and vegetables like sweet potatoes and peas are excellent sources. However, some dogs may have allergies or sensitivities to grains and may require a grain-free diet.
        </Text>

        <Text style={styles.subsectionTitle}>Vitamins and Minerals</Text>
        <Text style={styles.paragraph}>
          Vitamins and minerals are essential for various bodily functions, including bone health, immune support, and energy metabolism. A balanced commercial dog food typically contains the necessary vitamins and minerals, but fresh fruits and vegetables can also be beneficial.
        </Text>

        <Text style={styles.sectionTitle}>Common Nutrition Myths</Text>
        <Text style={styles.paragraph}>
          There are many myths about dog nutrition that can lead to confusion. Some common myths include the belief that dogs can thrive on a vegetarian diet, or that table scraps are a suitable food source. It's important to consult with a veterinarian to determine the best diet for your dog’s specific needs.
        </Text>

        <Text style={styles.sectionTitle}>Dog Care Tips</Text>
        <Image
          style={styles.careImage}
          source={require('../../assets/images/care.jpg')} // Local image path
        />
        <Text style={styles.paragraph}>
          Proper dog care involves regular grooming, exercise, and veterinary check-ups. Regular grooming helps maintain coat health and prevents skin issues, while exercise ensures physical and mental stimulation. Routine vet visits are crucial for monitoring health and preventing diseases.
        </Text>

        <Text style={styles.subsectionTitle}>Grooming</Text>
        <Text style={styles.paragraph}>
          Grooming requirements vary by breed. Some dogs need daily brushing and regular baths, while others may require less frequent care. Regular nail trimming and ear cleaning are also important to prevent infections and discomfort.
        </Text>

        <Text style={styles.subsectionTitle}>Exercise</Text>
        <Text style={styles.paragraph}>
          Exercise is vital for maintaining a dog's physical health and mental well-being. Activities such as walking, playing fetch, and agility training can keep your dog active and engaged. The amount of exercise needed depends on the dog's breed, age, and health status.
        </Text>

        <Text style={styles.subsectionTitle}>Veterinary Care</Text>
        <Text style={styles.paragraph}>
          Routine veterinary care includes vaccinations, dental check-ups, and parasite prevention. Regular check-ups help detect health issues early and ensure that your dog remains in optimal condition.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.example.com/dog-care-tips')}>
          <Text style={styles.buttonText}>Learn More About Dog Care</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  headerImage: {
    width: width - 32,
    height: 220,
    borderRadius: 12,
    marginBottom: 24,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  breedImage: {
    width: width - 32,
    height: 200,
    borderRadius: 12,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  historyImage: {
    width: width - 32,
    height: 220,
    borderRadius: 12,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  nutritionImage: {
    width: width - 32,
    height: 200,
    borderRadius: 12,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  careImage: {
    width: width - 32,
    height: 200,
    borderRadius: 12,
    marginVertical: 12,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 16,
  },
  subsectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#444',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'justify',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DogArticle;
