import _ from 'lodash';
import config from '../configs/app';

class MainService {
  constructor(selectedModel, name) {
    this.selectedModel = selectedModel;
    this.name = name;
  }

  async getAll({ page = 1, size = config.defaultLimit }) {
    try {
      const result = await this.selectedModel.find({}, null, {
        skip: (page - 1) * size,
        limit: size,
      });
      const payload = { rows: result, total: _.size(result) };
      return payload;
    } catch (error) {
      throw Error(
        `DB_FALSE_READ Database fetching have problem in model ${this.name}`,
        error,
      );
    }
  }

  async getOne(id) {
    try {
      const result = await this.selectedModel.findById(id);
      return result;
    } catch (error) {
      throw Error('DB_FALSE_READ Database fetching have problem', error);
    }
  }

  async createOne(payload) {
    try {
      // eslint-disable-next-line new-cap
      const result = new this.selectedModel(payload);
      await result.save();
      return result;
    } catch (error) {
      throw Error(
        `DB_FALSE_CREATE Database creating ${this.name} have problem`,
        error,
      );
    }
  }

  async updateOne(id, payload) {
    try {
      const user = await this.selectedModel.findByIdAndUpdate(id, {
        $set: payload,
      });
      return user;
    } catch (error) {
      throw Error('DB_FALSE_EDIT Database Updating have problem', error);
    }
  }

  async deleteOne(id) {
    try {
      const user = await this.selectedModel.findByIdAndDelete(id);
      return user;
    } catch (error) {
      throw Error('DB_FALSE_DELETE Database creating have problem', error);
    }
  }
}

export default MainService;
