"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPermissions = void 0;
exports.isAdminPermission = isAdminPermission;
exports.adminPermissions = [
    'access_donations',
    'edit_content',
    'manage_users',
    'app_testing',
];
var adminPermissionMap = {
    access_donations: true,
    edit_content: true,
    manage_users: true,
    app_testing: true,
};
function isAdminPermission(value) {
    return typeof value === 'string' && (value in adminPermissionMap);
}
