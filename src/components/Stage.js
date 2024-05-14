import React, { useState } from 'react';
import './Stage.css'; // Assurez-vous que le chemin vers le fichier CSS est correct

const Stage = () => {
    const [stages, setStages] = useState([
        // Ajouter ici les données de stage complètes
        {
            date: '2023-2024',
            formation: 'M2',
            specialite: 'Software Engineering',
            annee: '3ème année ingénieur - mobilité internationale',
            entreprise: 'Présidence de la République',
            localisation: 'Paris, France',
            description: 'Développement d\'outils web pour le suivi de nombreux indicateurs.'
        },
        // Ajouter d'autres entrées de stage si nécessaire
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStages = stages.filter(stage =>
        stage.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stage.specialite.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stage.entreprise.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="stage-container">
            <h2>Historique des Stages et Alternances</h2>
            <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Formation</th>
                            <th>Spécialité</th>
                            <th>Année</th>
                            <th>Entreprise</th>
                            <th>Localisation</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStages.map((stage, index) => (
                            <tr key={index}>
                                <td>{stage.date}</td>
                                <td>{stage.formation}</td>
                                <td>{stage.specialite}</td>
                                <td>{stage.annee}</td>
                                <td>{stage.entreprise}</td>
                                <td>{stage.localisation}</td>
                                <td>{stage.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Stage;
