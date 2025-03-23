# 📌 Auth Dashboard - Angular & Backend  

Ce repository contient deux projets :  

- **Backend Server** – Un serveur JSON simulant une API pour l'authentification et la gestion des utilisateurs.  
- **Frontend Angular** – Une application développée avec **Angular** et **Angular Material** pour une interface utilisateur moderne et interactive.  

---

## 📂 Structure du Projet  

```
auth-dashboard-angular/
│── backend-server/       # Serveur JSON (Fake API)
│── angular-dashboard/    # Application Angular
│── README.md             # Documentation
```

---

## 🚀 Comment Exécuter le Projet ?  

### 🖥️ 1. Démarrer le Backend Server (JSON Server)  

#### 📌 Installation des dépendances  
Assurez-vous d'avoir **Node.js** installé, puis exécutez :  

```bash
cd backend-server
npm install -g json-server  # Installe JSON Server globalement (si ce n'est pas déjà fait)
```

#### 📌 Lancer le serveur  

```bash
json-server --watch db.json --port 5000
```

🔹 **Accès API** : `http://localhost:5000/`  

---

### 🖥️ 2. Démarrer l'application Angular  

#### 📌 Installation des dépendances  

```bash
cd angular-dashboard
npm install
```

#### 📌 Lancer le serveur Angular  

```bash
ng serve
```

🔹 **Accès à l'application** : `http://localhost:4200/`  

---

## 🛠️ Technologies Utilisées  

- **Backend** : JSON Server (Fake API)  
- **Frontend** : Angular 17 + Angular Material + TailwindCSS  
- **Base de données** : JSON (simulé avec JSON Server)  

---

## 📌 Fonctionnalités  

✅ **Authentification** : Connexion et inscription avec gestion des sessions.  
✅ **Tableau de bord** : Interface utilisateur dynamique et responsive.  
✅ **Navigation interactive** : Sidebar et Navbar avec affichage dynamique.  
✅ **Gestion des utilisateurs** : Ajout, suppression et modification des utilisateurs via l'API JSON Server.  

---

## 📜 À propos  

Ce projet est une démonstration d'une architecture **Angular + Backend JSON Server**, intégrant des fonctionnalités d'authentification et de gestion des utilisateurs.  

Si vous avez des suggestions ou des améliorations, n'hésitez pas à contribuer ! 🚀  

---

💡 **Besoin d'aide ?** Contactez-moi ! 😊