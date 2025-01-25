let joke1=['Mareez Doctor sahab, mere dono kaan band ho gaye hain aur main bilkul nahin sun sakta. Doctor: Aapki umar kitni hai?Mareez: Navay saal. Doctor: Aapne bohot kuch sun liya, ab aapko mazeed sunne ki zaroorat nahin hai.😂','Baap (betey se)Tum ney tareekh mein kam number kyun ley hai Beta: "Abu! Tareekh ke parchey mein zyada tar soalat aise poochey gaye thay jo meri pidais se bhi pehley ke thay.😂','Ek ghar ka malik futt ho gaya. Is ghar ki aurtein rotey huey kehne lagi, "Haaye tu kahan chala gaya, jahan na roti hai, na paani, na nokar hai, na chakar, na hawa hai, na roshni."Itne mein ek aurat kehne lagi,Main dekhti hoon kahin woh hamarey ghar to nahin chala gaya hai.😂']
function joke(){
    let randomjoke=Math.floor(Math.random()*joke1.length);
    document.getElementById('jokess').innerHTML=joke1[randomjoke];
    document.getElementById('para').style.display='none';
}
