<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>MJC Base de ressources</title>
        <link rel="stylesheet" href="../../../css/style.css">
        <!-- <link rel="shortcut icon" href="media/favicon.ico" type="media/..."> -->
    </head>
    <?php
        session_start();
        $_SESSION['directory1'] = '../html/vieCitoyenne/vieCitoyenne_lesMedias/vieCitoyenne_lesMedias_documents';

        $_SESSION['directory2'] = 'vieCitoyenne_lesMedias_documents';
    ?>
    <body>
        <header>
            <a href="../../../index.html" class="header_bouton"><img id="accueil" src="../../../media/acceuil.png"></a>
            <div id="header_titre">MJC Base de ressources</div>
            <a href="" class="header_bouton"><img id="question" src="../../../media/question.png"></a>
        </header>
        <main>
            <section>
                <div class="ligne_haute">
                    <div onclick="goBack()" class="revenir_bouton"><img id="revenir_img" src="../../../media/revenir.png"></div>
                    <h2 class="prompt">Voici les documents disponibles !</h2>
                </div>
                <h1><small>Dossier : vie citoyenne : les médias</small></h1>
                <div class="tuile_section">
                    <?php
                    include '../../../php/get_files.html';
                    ?>     
                </div>
                <br>
            </section>
        </main>

        <script src="../../../javascript/script.js"></script>
    </body>
</html>