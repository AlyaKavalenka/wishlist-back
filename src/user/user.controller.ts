import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({
    status: 201,
    description: 'New user created',
  })
  @ApiResponse({
    status: 400,
    description:
      'If request body does not contain required fields or user with request username is already exist',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'All users records.' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get single user by id' })
  @ApiResponse({
    status: 200,
    description: 'If record with id === user_id if it exists',
  })
  @ApiResponse({
    status: 400,
    description: 'If user_id is invalid (not uuid)',
  })
  @ApiResponse({
    status: 404,
    description: 'If record with id === user_id doesn`t exist',
  })
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.findOne(id);
  }

  // TODO:
  @Patch(':id')
  @ApiOperation({ summary: 'Update user info' })
  @ApiResponse({
    status: 200,
    description: 'Updated record if request is valid',
  })
  @ApiResponse({
    status: 400,
    description: 'If user_id is invalid (not uuid)',
  })
  @ApiResponse({
    status: 404,
    description: 'If record with id === user_id doesn`t exist',
  })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  // TODO:
  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({
    status: 204,
    description: 'If the record is found and deleted',
  })
  @ApiResponse({
    status: 400,
    description: 'If user_id is invalid (not uuid)',
  })
  @ApiResponse({
    status: 404,
    description: 'If record with id === user_id doesn`t exist',
  })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.remove(id);
  }
}
