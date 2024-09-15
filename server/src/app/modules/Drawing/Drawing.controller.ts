import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DrawingService } from './Drawing.service';

const createToDB = catchAsync(async (req, res) => {
  const result = await DrawingService.createToDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Drawing created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await DrawingService.getAllFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Drawing are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DrawingService.getSingleFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Drawing retrieved successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DrawingService.updateIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Drawing updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DrawingService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Drawing deleted successfully',
    data: result,
  });
});

export const DrawingController = {
  getAllFromDB,
  createToDB,
  getSingleFromDB,
  updateIntoDB,
  deleteFromDB,
};
