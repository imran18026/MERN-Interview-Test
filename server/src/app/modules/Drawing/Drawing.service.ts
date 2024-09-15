import QueryBuilder from '../../builder/QueryBuilder';
import { DrawingSearchableFields } from './Drawing.constants';
import { Drawing } from './Drawing.model';

const createToDB = async (data: any) => {
  console.log(data);
  const result = await Drawing.create(data);
  return result;
};

const getAllFromDB = async (query: any) => {
  const TrainQuery = new QueryBuilder(Drawing.find(), query)
    .search(DrawingSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await TrainQuery.modelQuery;
  const meta = await TrainQuery.countTotal();
  return {
    result,
    meta,
  };
};

const getSingleFromDB = async (id: string) => {
  const result = await Drawing.findById(id);
  return result;
};

const updateIntoDB = async (id: string, data: any) => {
  const result = await Drawing.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await Drawing.findByIdAndDelete(id);
  return result;
};

export const DrawingService = {
  getAllFromDB,
  createToDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
};
