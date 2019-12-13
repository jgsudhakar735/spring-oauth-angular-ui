import { PermissionDTO } from './../../modal/PermissionDTO';
import { BaseIFaceService } from '../../common/iface/base-iface.service';
export declare interface PermissionIfaceService extends BaseIFaceService<PermissionDTO> {
getRoleMappedToPermission(permissionId: number);
}
