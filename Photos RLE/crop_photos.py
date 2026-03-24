from PIL import Image
import os

def crop_canva_image(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"Erreur: Le fichier {input_path} n'existe pas.")
            return False
            
        img = Image.open(input_path)
        width, height = img.size
        
        # Sur les images Canva de l'utilisateur:
        # La photo est à gauche, le texte à droite.
        # On prend les 50% de gauche.
        # Format portrait pour le site (4:5 ratio idéal)
        
        # On garde 50% de la largeur (côté gauche)
        # Mais pour être sûr de bien cadrer et éviter le texte:
        # On prend un peu moins de 50% si nécessaire.
        # Ici on prend exactement la moitié gauche.
        left = 0
        top = 0
        right = width // 2
        bottom = height
        
        cropped_img = img.crop((left, top, right, bottom))
        cropped_img.save(output_path, "PNG")
        print(f"Succès: {output_path} généré.")
        return True
    except Exception as e:
        print(f"Erreur lors du traitement de {input_path}: {e}")
        return False

# Liste des membres à traiter
directory = "Photos RLE"
members = {
    "Marie-Reine Ntabala.png": "marie_portrait.png",
    "Séphora Ilunga.png": "sephora_portrait.png",
    "Uruelle Katande.png": "urielle_portrait.png",
    "Nanoushe Mulaj.png": "nanouche_portrait.png",
    "Christian Mwamba.png": "christian_portrait.png",
    "Eliezer Dikiefu.png": "eliezer_portrait.png",
    "Tensia Molisho.png": "tensia_portrait.png"
}

for src, dest in members.items():
    input_file = os.path.join(directory, src)
    crop_canva_image(input_file, dest)
