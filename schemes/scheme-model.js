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

const AddSchemeStep = (step, schemeID)=>{
    return DB('step')
    .insert(step, "id")
    .then(ids=>{
        return findSteps(schemeID)
    })
}

const EditScheme = async (changes, id)=>{
    await DB('scheme')
    .update(changes)
    .where("id", id)

    return findById(id)

}

const RemoveScheme = (id)=>{
    return DB('scheme')
    .where("id", id)
    .del()

}

module.exports={
    find,
    findById,
    findSteps,
    AddScheme,
    AddSchemeStep,
    EditScheme,
    RemoveScheme
}