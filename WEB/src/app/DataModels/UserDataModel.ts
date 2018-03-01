import ContestStageDataModel from './ContestStageDataModel';

class UserDataModel {
    _id: string;
    name: string = '';
    phone: number = 0;
    email: string = '';
    gender: string;
    password: string = '';
    confirm_password:string;
    new_password:string;
    current_password:string;
    age:any;
    imageUrl: string = '';
    birthday: Date
    city: string = '';
    contest_stages_map:any;
    contest_stages: ContestStageDataModel;
    viralLink: string = ''
    missionProgress:any;
    isEmpty(): boolean {
        if(!this._id){
            return true;
        }
        for (var prop in this) {
            if (prop != 'viralLink' && (this.hasOwnProperty(prop) && (this['' + prop] != '' || this['' + prop] != 0)))
                return false;
        }
        return true;
    }
}
export default UserDataModel;
