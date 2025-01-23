<?php
session_start();

// Liste des fichiers dans le dossier
$files = scandir($_SESSION['directory1']);

// Filtrer les fichiers cachés (commençant par un point)
$files = array_filter($files, function($file) {
    return $file[0] !== '.';
});

// Construire un tableau d'objets avec les noms de fichiers et leur chemin complet
$filesWithPath = [];
foreach ($files as $file) {
    $filesWithPath[] = [
        'name' => $file,
        'path' => $_SESSION['directory2'] . '/' . $file
    ];
}

// Renvoyer la liste des fichiers au format JSON
header('Content-Type: application/json');
echo json_encode($filesWithPath);
?>