import { HelperPanelType } from '@/types/store';

export class LocalStorageService {
  private static accessToken = 'access_token';
  private static refreshToken = 'refresh_token';
  private static expandedLeftSidebar = 'expanded-left-sidebar';
  private static helperType = 'helper-type';
  private static shuffle = 'shuffle';
  private static repeat = 'repeat';

  public static setAccessToken(token: string) {
    localStorage.setItem(LocalStorageService.accessToken, token);
  }

  public static removeAccessToken() {
    localStorage.removeItem(LocalStorageService.accessToken);
  }

  public static getAccessToken() {
    return localStorage.getItem(LocalStorageService.accessToken);
  }

  public static setRefreshToken(token: string) {
    localStorage.setItem(LocalStorageService.refreshToken, token);
  }

  public static removeRefreshToken() {
    localStorage.removeItem(LocalStorageService.refreshToken);
  }

  public static getRefreshToken() {
    return localStorage.getItem(LocalStorageService.refreshToken);
  }

  public static setExpandedLeftSidebar(value: boolean) {
    localStorage.setItem(
      LocalStorageService.expandedLeftSidebar,
      value.toString()
    );
  }

  public static getExpandedLeftSidebar() {
    return localStorage.getItem(LocalStorageService.expandedLeftSidebar);
  }

  public static setHelperType(type: HelperPanelType) {
    localStorage.setItem(LocalStorageService.helperType, type);
  }

  public static removeHelperType() {
    localStorage.removeItem(LocalStorageService.helperType);
  }

  public static getHelperType() {
    return localStorage.getItem(LocalStorageService.helperType);
  }
}
