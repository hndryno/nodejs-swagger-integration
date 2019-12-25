class API {
    constructor(model) {
        this.model = model
    }

    async list(q, population) {
        try {
            let params = {}

            let populate_params = []

            if(population){
                populate_params = population
            }

            if(q) {
                params = q
            }

            let data = await this.model.find(params).populate(
                populate_params
            ).lean().exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async show(q, population) {
        try {
            let populate_params = []

            if(population){
                populate_params = population
            }

            let data =  await this.model.findOne(q).populate(populate_params).lean().exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async create(input) {
        try {
            let data = new this.model(input)
            await data.save()

            return data
        } catch(err) {
            throw err
        }
    }

    async update(q, input, opts) {
        try {
            let data = await this.model.findOneAndUpdate(
                q, input, opts
            ).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async delete(q) {
        try {
            let data = await this.model.findOneAndDelete(q).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async paginate(q, population, opts){
        try{
            let params = {},
                populate = [],
                options = {}

            if(q) {
                params = q
            }

            if(population) {
                populate = population
            }

            if(opts){
                options = {
                    populate, 
                    ...opts
                }
            }

            let data = await this.model.paginate(
                params, options
            )

            let meta = {
                total: data.total,
                limit: data.limit,
                page: data.page,
                pages: data.pages
            }

            return {data, meta}

        }catch(err){
            throw err
        }
    }

    async softDelete(q){
        try{
            let data = await this.model.findOneAndUpdate(q, {
                deleted_at: Date.now()
            }).exec()

            return data
        }catch(err){
            throw err
        }
    }
}

module.exports = API
