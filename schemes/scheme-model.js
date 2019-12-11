const DB = require("../data/db.js");

const find = ()=>{
    return DB('scheme')

}

const findById = (id)=>{
    return DB('scheme')
    .where('id', id)
}

const findSteps=(id)=>{
    return DB
    .select("scheme_name", "step_number", "instructions")
    .from('scheme')
    .join("step", "scheme.id", "step.scheme_id")
    .where("scheme.id", id)
    .orderBy("step.step_number")
}

const AddScheme = (scheme)=>{

    return DB ('scheme')
    .insert(scheme, "id")
    .then(ids=>{
        return findById(ids[0])
    })
}

module.exports={
    find,
    findById,
    findSteps,
    AddScheme
}