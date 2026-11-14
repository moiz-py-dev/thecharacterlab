/* ---------- data ---------- */
const problems = [
  ["🧬","Identity and purpose"],["👥","Peer pressure"],["🌊","Emotional challenges"],
  ["💬","Difficult relationships"],["⚖️","Decision-making"],["🌫️","Moral confusion"],
  ["📱","Social media influence"],["🗣️","Conflict and communication"],["🌍","Understanding how values apply in real life"]
];
const methodSteps = [
  ["1","Experience the Story","Learners journey through powerful moments from the Seerah."],
  ["2","Feel the Human Experience","They explore the emotions, struggles, relationships, and decisions behind the events."],
  ["3","Reflect","They connect the lesson with their own thoughts, experiences, and understanding."],
  ["4","Question","They engage with meaningful and sometimes difficult questions."],
  ["5","Apply","Through case studies and real-life situations, learners explore how values work in practice."],
  ["6","Become","Learning gradually translates into awareness, choices, habits, and character."]
];
const teach = [
  ["📖","accent-sky","Seerah Through Storytelling","Exploring the life of Prophet Muhammad ﷺ through emotional, immersive, and reflective storytelling."],
  ["💚","","Character & Moral Development","Developing values such as empathy, courage, honesty, resilience, patience, responsibility, and compassion."],
  ["🧩","accent-coral","Case Study Learning","Exploring contemporary challenges through scenarios, discussions, analysis, and rebuttal."],
  ["🧠","accent-violet","Critical Thinking","Encouraging learners to question, analyse perspectives, and think beyond surface-level answers."],
  ["❤️","accent-amber","Emotional Intelligence","Understanding emotions, relationships, conflict, communication, and self-awareness."],
  ["🧭","accent-sky","Purpose & Identity","Helping young people navigate questions around who they are, what they believe, and how they want to live."]
];
const timeline = [
  ["STEP 1","THE STORY","A powerful event from the Seerah is narrated.","For example: How did Prophet Muhammad ﷺ respond when he faced rejection, opposition, or personal loss?"],
  ["STEP 2","THE EMOTION","Learners explore what this experience might have felt like, what emotions were involved, and what makes the moment human and relatable.","• What might this experience have felt like?<br>• What emotions were involved?<br>• What makes this moment human and relatable?"],
  ["STEP 3","THE REFLECTION","Learners are encouraged to connect the lesson with their own lives.",""],
  ["STEP 4","THE CASE","A modern-day situation is introduced.","For example: You are excluded by your friends, misunderstood by people around you, or publicly criticised. How do you respond?"],
  ["STEP 5","THE DISCUSSION","Learners analyse different responses, perspectives, consequences, and values.",""],
  ["STEP 6","THE TAKEAWAY","The lesson moves from \"What happened then?\" to \"Who am I becoming now?\"",""]
];
const offers = [
  ["🎤","accent-amber","Workshops","Short, focused sessions around specific themes."],
  ["📚","accent-sky","Courses","Structured multi-week learning programmes."],
  ["📖","","Seerah & Character Programmes","Story-based journeys through selected themes from the Seerah."],
  ["🧩","accent-coral","Case Study Sessions","Interactive discussions around modern challenges and moral dilemmas."],
  ["🧑‍🏫","accent-violet","Teacher & Facilitator Resources","Structured material and methodology for educators."],
  ["✨","accent-amber","Customised Programmes","Content adapted according to the needs of your students or institution."]
];
const impact = [["3","Age ranges served 8 yrs → 26 yrs"],["6","Reflective method steps"],["9","Expert faculty & mentors"],["100%","Learner-recommended"]];
const testimonialPhotos = {"Anoushay Gulzar": "images/testimonials/anoushay-gulzar.jpg", "Eemaan Binte Fayyaz": "images/testimonials/eemaan-binte-fayyaz.jpg"};
const testimonials = [
  ["The impact and importance of Seerat-un-Nabi ﷺ are especially significant in these challenging times of fitnah. It is only by learning about the life, character, and teachings of our beloved Prophet Muhammad ﷺ that we can truly understand him and strive to follow him as our role model.","Hajra Gulzar","23"],
  ["We have all listened to the Seerat of Prophet SAW throughout our lives, but we never truly felt it. It always seemed like something distant. This course is designed in such a way that you actually feel it, and it literally sows the seeds of love for Prophet SAW in your heart.","Zainab Amir","25"],
  ["The sessions were so impactful, conducted in a way that could make you feel everything in every vein of your body. Recalling everything but in such a beautiful way has to be the best thing done.","Hadiya Kashif","26"],
  ["I was 8 back when I took the seerah classes... those sessions really helped me connect and understand our faith and connected our souls to the life of Prophet S.A.W in a way that can't be explained in words. The teachings are still part of my life deeply.","Haania Zayyad","18"],
  ["I had a wild storm inside me of rebellion and constant peer pressure. My amazing teachers taught me so well that it instilled in my heart and Sunnahs came into action in my daily life. I am forever thankful to my mentors for changing my life.","Anoushay Gulzar",""],
  ["The Seerat tul Nabi course was a profound and transformative experience. It helped me connect with our Beloved Prophet (PBUH) at a deeper level. I shared his joys and sorrows, went with him to battle, and sat with him at dinner. 100% recommend!","Eemaan Binte Fayyaz","25"]
];
const team = [
  ["Maryam Sinclair","Mentor · Faculty Training in Storytelling","Maryam brought the craft of storytelling to our faculty, shaping how our team narrates the Seerah with warmth and depth. She is the award-winning author of When Wings Expand, Miraculous Happenings in the Year of the Elephant, and A Trust of Treasures, along with five audiobooks including A Mercy to the Worlds and The Bowing of the Stars. Her narrations of classical Qur'anic stories have reached thousands of live listeners across the US, UK, Turkey, Jordan, Pakistan, Australia, and New Zealand."],
  ["Abdal Munir","PhD Scholar (Turkey) — Seerah & Character Education","Abdal connects timeless Prophetic wisdom with the questions, challenges, and choices young people face today. His expertise spans Seerah storytelling, character building, and youth development, alongside work as a life coach and in Islamic entrepreneurship."],
  ["Nabeela Raheel","Director of Training & Curriculum Development","A resourceful educationist, Nabeela has honed her craft over years of teaching and leadership, most recently as Ex-Principal of Meem School. She is a Master Trainer at Synapra, a Leadership Accredited Trainer and internationally certified Curriculum Developer and Teacher Leader with The CPD Standards Office, UK, and holds an MPhil in Education alongside the LC-A CSML Course from Boston, Massachusetts. Her international certifications and diverse experience make her a sought-after consultant for teacher training."],
  ["Safaa Ali Feroze","Education Specialist","Safaa holds an MA in Education from the University of East London and is an MPhil Gold Medalist in Educational Leadership and Management, bringing over a decade of experience in classroom teaching, curriculum design, and teacher development across the UK and Pakistan. She has taught across secondary school year groups, led content development for English-language programmes, and designed assessments and training workshops — including teacher training and conferences on character building and spiritual curriculum for ages 16–18."],
  ["Asma Baig","Curriculum Developer & Educator","Asma brings over 15 years of experience in education, technology, and values-based learning, holding an M.Ed., a PGD in Computer Sciences, and three years of intensive Islamic education. With a decade teaching Computer Science and Islamiyat, she specialises in developing character-focused curricula inspired by the Seerah of Prophet Muhammad ﷺ and the educational philosophy of Imam Al-Ghazali, nurturing empathy, critical thinking, social responsibility, ethical decision-making, and digital readiness in young minds."],
  ["Muhammad Ahsan Gillani","Aspirant and Mentor of English","Holding a Master's in English from the University of the Punjab, Ahsan brings years of experience mentoring students in language and literature. He led the Cognitive Spectrum of Seerah programme at Meem Academy, blending analytical reasoning with bilingual communication skills, and has since worked as a freelance academic content writer. Passionate about cross-cultural literature and linguistics, he's dedicated to sharpening students' communicative competence and critical thinking."],
  ["Muhammad Qasim Puri","Operations & Administration Specialist","Muhammad Qasim Puri completed his higher education in business administration, graduating with a BA (Hons) in International Business Management from London Metropolitan University. Throughout his career, he has focused on institutional organization, system development, and stakeholder engagement. His work in the educational sector includes administrative leadership at Unity International School and Meem Academy, where he developed administrative departments, designed operational systems, and managed school-wide events and public communications. Beyond education, he has held key responsibilities in financial crime investigation at Revolut with Mindbridge Pvt. Ltd., project management, and business development. Driven by a commitment to structured leadership and team growth, Muhammad Qasim combines operational oversight with strong interpersonal engagement to build efficient, community-centered institutional environments."]
];
const teamPhotos = {"Maulana Tariq Jameel": "images/team/maulana-tariq-jameel.jpg", "Jahanzeb Burana": "images/team/jahanzeb-burana.jpg", "Maryam Sinclair": "images/team/maryam-sinclair.jpg", "Nabeela Raheel": "images/team/nabeela-raheel.jpg", "Safaa Ali Feroze": "images/team/safaa-ali-feroze.jpg", "Asma Baig": "images/team/asma-baig.jpg", "Muhammad Qasim Puri": "images/team/muhammad-qasim-puri.jpg", "Abdal Munir": "images/team/abdal-munir.jpg", "Muhammad Ahsan Gillani": "images/team/muhammad-ahsan-gillani.jpg"};

 /* ---------- render ---------- */
const q=s=>document.querySelector(s);
q('#problem-grid').innerHTML = problems.map(p=>`<div class="card accent-sky"><div class="ico">${p[0]}</div><h3 style="font-size:1.05rem">${p[1]}</h3></div>`).join('');
q('#method-steps').innerHTML = methodSteps.map(s=>`<div class="step"><i>${s[0]}</i><h4>${s[1]}</h4><p>${s[2]}</p></div>`).join('');
q('#teach-grid').innerHTML = teach.map(t=>`<div class="card ${t[1]}"><div class="ico">${t[0]}</div><h3>${t[2]}</h3><p>${t[3]}</p></div>`).join('');
q('#timeline').innerHTML = timeline.map((t,i)=>`<div class="tl-item"><div class="tl-num">${i+1}</div><div><h4>${t[0]} — ${t[1]}</h4><p>${t[2]}</p>${t[3]?`<div class="example">${t[3]}</div>`:''}</div></div>`).join('');
q('#offer-grid').innerHTML = offers.map(o=>`<div class="card ${o[1]}"><div class="ico">${o[0]}</div><h3>${o[2]}</h3><p>${o[3]}</p></div>`).join('');
q('#impact').innerHTML = impact.map(s=>`<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('');
q('#testimonials').innerHTML = testimonials.map(t=>{
  const ini=t[1].split(' ').map(w=>w[0]).slice(0,2).join('');
  const photo=testimonialPhotos[t[1]];
  const avatarHtml = photo ? `<div class="avatar photo"><img src="${photo}" alt="${t[1]}"></div>` : `<div class="avatar">${ini}</div>`;
  return `<div class="tst"><div class="quote">"</div><p>${t[0]}</p><div class="who">${avatarHtml}<div><b>${t[1]}</b><span>${t[2]?('Age '+t[2]):'Learner'}</span></div></div></div>`;
}).join('');
q('#team-grid').innerHTML = team.map((m,i)=>{
  const group = i===0 ? 'Our Mentors' : i===1 ? 'Our Leaders' : i===4 ? 'Our Team' : '';
  const groupHeading = group ? `<h3 class="team-group-title">${group}</h3>` : '';
  const ini=m[0].split(' ').filter(w=>w.length>1).map(w=>w[0]).slice(0,2).join('');
  const img = teamPhotos[m[0]];
  const head = img
    ? `<img class="photo" src="${img}" alt="${m[0]}">`
    : `<div class="ph"><div class="mono">${ini}</div></div>`;
return `${groupHeading}<div class="person ${i===0?'solo':''}">${head}<div><h4>${m[0]}</h4><div class="role">${m[1]}</div></div><p>${m[2]}</p></div>`;
}).join('');

/* ---------- interactions ---------- */
const burger=q('#burger'), menu=q('#menu');
burger.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const revealAll=()=>document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'));
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.06,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
/* failsafe: never leave content hidden */
window.addEventListener('load',()=>setTimeout(revealAll,1200));
setTimeout(revealAll,3500);

/* count-up stats */
const statIO=new IntersectionObserver(es=>{
  es.forEach(e=>{ if(!e.isIntersecting) return;
    e.target.querySelectorAll('.stat b').forEach(b=>{
      const raw=b.textContent.trim(), num=parseFloat(raw.replace(/[^\d.]/g,''));
      if(isNaN(num)) return;
      const suffix=raw.replace(/[\d.]/g,''); let i=0, steps=40;
      const t=setInterval(()=>{i++;b.textContent=Math.round(num*i/steps)+suffix;if(i>=steps){b.textContent=raw;clearInterval(t)}},22);
    });
    statIO.unobserve(e.target);
  });
},{threshold:.3});
document.querySelectorAll('.impact').forEach(el=>statIO.observe(el));

/* lightbox */
(function(){
  const lb=document.getElementById('lb');
  document.querySelectorAll('.gitem').forEach(f=>{
    f.addEventListener('click',()=>{
      lb.querySelector('img').src=f.querySelector('img').src;
      lb.querySelector('.lb-cap').textContent=f.dataset.cap||'';
      lb.classList.add('open');
    });
  });
  lb.addEventListener('click',()=>lb.classList.remove('open'));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
})();

(function(){
  var backdrop=document.getElementById('contactModalBackdrop');
  var closeBtn=document.getElementById('contactModalClose');
  var form=document.getElementById('contactForm');
  function openModal(e){ if(e) e.preventDefault(); backdrop.classList.add('open'); }
  function closeModal(){ backdrop.classList.remove('open'); }
  document.querySelectorAll('.open-contact').forEach(function(el){ el.addEventListener('click', openModal); });
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(backdrop) backdrop.addEventListener('click', function(e){ if(e.target===backdrop) closeModal(); });
  if(form) form.addEventListener('submit', function(e){
    e.preventDefault();
    var btn=form.querySelector('button[type="submit"]');
    var status=document.getElementById('cf-status');
    if(!status){
      status=document.createElement('p');
      status.id='cf-status';
      status.style.cssText='margin-top:.8rem;font-weight:600';
      form.appendChild(status);
    }
    var name=document.getElementById('cf-name').value;
    var org=document.getElementById('cf-org').value;
    var data=new FormData(form);
    data.append('access_key','b6d41ce8-b116-49de-9ad6-595f6fb9c297');
    data.append('subject','Institutional Enquiry — '+org+' ('+name+')');
    data.append('from_name','The Character Lab Website');
    var oldText=btn.textContent;
    btn.disabled=true;
    btn.textContent='Sending…';
    status.textContent='';
    fetch('https://api.web3forms.com/submit',{method:'POST',body:data})
      .then(function(r){ return r.json(); })
      .then(function(res){
        if(res.success){
          form.reset();
          status.style.color='var(--teal)';
          status.textContent='Thank you! Your enquiry has been sent. Our team will reply by email soon.';
        } else {
          throw new Error(res.message||'Error');
        }
      })
      .catch(function(){
        status.style.color='#b3261e';
        status.textContent='Sorry, something went wrong. Please email us at thecharacterlab.official@gmail.com.';
      })
      .finally(function(){
        btn.disabled=false;
        btn.textContent=oldText;
      });
  });
})();