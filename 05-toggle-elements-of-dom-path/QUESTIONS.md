# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Your reply here...
izmantoti, .getElementsByClassName () un .querySelectorAll (). .getElementsByClassName () aizņem tikai vienu argumentu, tāpēc jūs nevarēsit pārvietoties kokā. Tomēr .querySelectorAll () ļauj iegūt precīzāku informāciju. Šajā gadījumā kā arguments, kas tika ievietots "ul.second_five li", tas liek datoram atrast visus ul tagus, pēc tam no šiem tagiem mēs ņemam tikai tos, kas ir atzīmēti ar "second_five", atstarpe ir bērnu raksturs norādot, ka jums jāņem tikai tie elementi ar pirmajiem diviem atribūtiem, kas ir atzīmēti kā saraksta vienumi.
