import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Yleiset tyylit
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
});

// Komponenttikohtaiset tyylit
export const customButtonStyles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export const plantCardStyles = StyleSheet.create({
  card: {
    width: width * 0.9,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export const reminderCardStyles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#00796b',
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#004d40',
  },
});

// Näkymäkohtaiset tyylit
export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Keskitetään sisältö
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5, // Sopiva etäisyys teksteille
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 15, // Kuva ja teksti erillään
  },
});

export const addPlantScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  imageText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
});

export const plantProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
