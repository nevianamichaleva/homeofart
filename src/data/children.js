export const children = [
  {
    id: 1,
    name: "Боряна",
    slug: "boryanа",
    age: 11,
    bio: "Боряна е на 11 години и обича да изразява себе си чрез изкуството. Най-много я вдъхновяват природата, нощното небе и животните. Тя рисува с въображение и смелост, обича да експериментира с цветове и текстури, а понякога превръща дори дрехите си в платно за творчество. За нея рисуването е начин да разказва истории и да показва как вижда света – малко по-магичен, по-тих и по-красив.",
    shortBio: "Любознателно и артистично дете, вдъхновено от цветовете, формите и създаването на изкуство.",
    avatar: "/artworks/boryana/portret.png", 
    videoUrl: null, 
    artworks: [
      {
        id: 1,
        title: "Млечният път",
        image: "/artworks/boryana/milky-way.jpg", 
        description: "Нарисувах тази картина, защото много обичам нощното небе. Представих си как Млечният път е като светла река от звезди, която минава над тиха гора и вода. Докато рисувах, си мислех колко е голям Космосът и колко много тайни има в него. Исках звездите да изглеждат като малки златни искри, които светят в тъмното.",
        year: 2026,
        code: "boryana-1"
      },
      {
        id: 2,
        title: "Заглавие на творба 2",
        image: "/artworks/boryana/space.jpg",
        description: "Описание на творбата",
        year: 2026,
        code: "boryana-2"
      }
    ]
  }
  // Добавете още деца тук...
];


export function getChildBySlug(slug) {
  if (!slug) return null;

  const normalizedSlug = slug.toLowerCase().trim();
  return children.find(child => {
    const childSlug = (child.slug || '').toLowerCase().trim();
    return childSlug === normalizedSlug;
  });
}


export function getAllChildren() {
  return children;
}
