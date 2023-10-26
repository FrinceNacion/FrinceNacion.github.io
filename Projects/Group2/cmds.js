// This chunk of code came from Bradwoods' Digital garden website about table of contents
const tocItems = document.querySelectorAll(".tocItem");//Eto yung mga item sa Table of contents part2 (Array)
const sections = document.querySelectorAll(".content");//Eto naman yung tatlong content natin sa loob ng box (Array)

//Eto yung magiging option sa Intersection observer 
const options = {//Object
    root: document.getElementById(".contentContainer"),//eto yung pinaka root ng tatlong content natin
    rootMargin: "-50% 0px", //-50px sya sa vertical axis
    threshold: 0, //matatawag sya as long as my one pixel na 
}

// highlight class line:75 sa css
const highLight = "highlight";

//Ito ay isang MAP, ina-assign nya yung tatlong content sa corresponding item nya sa table of content
const tableOfContentsMap = [...sections].reduce(//Reduce function ay nag re-reduce ng array sa pamamagitan ng pag-aasign ng function sa kada element ng array
    //eto yung function na nag Run sa kada element(section) ng array
    (acc, section, i) => ({
      ...acc,// acc means accumulator, dito mapupunta pag na assign na yung section sa tocItems(table of content)
      [section.id]: tocItems[i],
   }),
   {}
);

let sectionId = sections[0].id;// first Id ng section natin, in this case yung laman ng variable nato ay 'topicSec'
console.log(sectionId);

// function para i remove yung highlight class
function removeHighlight(id) {
   tableOfContentsMap[id].classList.remove(highLight);
}
// function para i add yung highlight class
function addHighlight(id) {
   tableOfContentsMap[id].classList.add(highLight);
}
// Last function, nag ti-trigger to pag nag bago na yung section, i re-remove nya yung highlight class
// sa luma at ia-add naman sa bago. I-imagine nyo lang na nasa pinaka gitna ng content box yung imaginary line
// I try nyong i scroll yung border ng unang section lagpas sa gitna at magti-trigger ang func na ito.
function onObserve(entries, observer) {
   entries.forEach((entry) => {
    //tinitignan ng if statement nato kung nag i-intersect ba yung border sa imaginary line sa pinaka gitna 
      if (entry.isIntersecting) {
         const { id } = entry.target;
         removeHighlight(sectionId);
         addHighlight(id);
         sectionId = id;
      }
   });
}

// another object, eto yung IntersectionObserver na nakaka detect ng pagbabago ng section
// kung makikita nyo, dito naka assign yung function na mag ti-trigger pag na detect na, nandito na rin yung option object
const observer = new IntersectionObserver(onObserve, options);

//For-loop, dito na ginagawa yung action ng observer
//Mag lo-loop sya sa tatlong item ng array(sections), section ay yung variable panandaliang kakalagyan ng tatlong item sa array pag time na nila sa loop.
sections.forEach((section) => {
   observer.observe(section);
});

//collapsible
const tocParent = document.querySelectorAll(".tocParent");
const tocChild = document.querySelectorAll(".tocItem");
const activeClass = "active";

for(var i = 0; i<tocParent.length; i++){
    tocParent[i].addEventListener("click", function(){
        tocParent[i].classList.toggle(activeClass);
        let tocChild = tocChild[i];
        if (tocChild.style.display === "block") {
            tocChild.style.display = "none";
        } else {
          tocChild.style.display = "block";
        }
    });
}



