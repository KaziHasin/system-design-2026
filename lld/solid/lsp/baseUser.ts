abstract class BaseUser {

    abstract getUserRole(): string;
    displayInfo(): void { }
}

export default BaseUser;