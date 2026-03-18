import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BioScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}> Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sobre Mim</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profileRow}>
          <Image
            source={require('../assets/foto-perfil.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.bioText}>
            Olá! Sou Joaquim, desenvolvedor iniciante. 
            Adoro criar interfaces bonitas, performáticas e intuitivas. 
            Já desenvolvi alguns projetos mais focados pro back-end
            e esse é o meu primeiro com react native.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.skills}>
          {['React Native', 'Expo', 'JavaScript', 'TypeScript', 'UI/UX', 'python', 'Html/Css'].map(skill => (
            <View key={skill} style={styles.skillPill}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.contact}>📧 joaquimpaulovieirademeloo@gmail.com</Text>
        <Text style={styles.contact}>📱 (82) 98899-1876</Text>
        <Text style={styles.contact}>🌐 github.com/bababoey761</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  header: { padding: 20, paddingTop: 60, backgroundColor: '#16213e', flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  backText: { color: '#00d4ff', fontSize: 18 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' },
  content: { padding: 25 },
  profileRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 15, marginBottom: 20 },
  profileImage: { width: 110, height: 110, borderRadius: 20, backgroundColor: '#223055' },
  bioText: { flex: 1, fontSize: 17, color: '#ddd', lineHeight: 26 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#00d4ff', marginTop: 35, marginBottom: 15 },
  skills: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  skillPill: { backgroundColor: '#0f3460', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 30 },
  skillText: { color: '#fff', fontSize: 15 },
  contact: { fontSize: 17, color: '#ccc', marginBottom: 12 },
});

export default BioScreen;