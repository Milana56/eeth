import { skills } from '../data/skills';

const getSkillsByCategory =(category)=>{
    
    const list = ['languages','frameworks/libraries'];

    if(!list.includes(category)){
        throw new Error('Didnt find category');
    }
    
    return skills.filter(skill => skill.category === category);
}

export default getSkillsByCategory;