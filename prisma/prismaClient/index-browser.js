
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DepartmentsScalarFieldEnum = makeEnum({
  guid_dept: 'guid_dept',
  deptName: 'deptName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.Dept_empScalarFieldEnum = makeEnum({
  guid_dept_emp: 'guid_dept_emp',
  dept_guid: 'dept_guid',
  emp_guid: 'emp_guid',
  from_date: 'from_date',
  to_date: 'to_date',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.EmployeesScalarFieldEnum = makeEnum({
  guid_employee: 'guid_employee',
  firstName: 'firstName',
  lastName: 'lastName',
  birthDate: 'birthDate',
  hire_date: 'hire_date',
  wage: 'wage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  user_guid: 'user_guid'
});

exports.Prisma.PermissionScalarFieldEnum = makeEnum({
  guid_permission: 'guid_permission',
  permTitle: 'permTitle',
  createdAt: 'createdAt',
  updatetAt: 'updatetAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  guid_role: 'guid_role',
  roleTitle: 'roleTitle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  user_guid: 'user_guid'
});

exports.Prisma.Role_permissionScalarFieldEnum = makeEnum({
  guid_role_perm: 'guid_role_perm',
  permission_guid: 'permission_guid',
  role_guid: 'role_guid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TokensScalarFieldEnum = makeEnum({
  guid_token: 'guid_token',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  users_guid: 'users_guid'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  guid_user: 'guid_user',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  user: 'user',
  tokens: 'tokens',
  permission: 'permission',
  role: 'role',
  role_permission: 'role_permission',
  departments: 'departments',
  employees: 'employees',
  dept_emp: 'dept_emp'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
