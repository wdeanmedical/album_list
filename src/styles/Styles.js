import { Colors } from '../constants/colors'

export default {
  app: {
    flex: 1,
    backgroundColor: Colors.charcoalGrey,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.charcoalGrey,
    paddingTop: 20,
  },
  listItem: {
    margin: 2,
    padding: 5,
    backgroundColor: Colors.white,
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  headerStyle: {
    backgroundColor: Colors.charcoalGrey,
    borderBottomColor: Colors.charcoalGrey,
  },
  headerTintColor: Colors.headerTint,
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  itemImage: {
    height: 100,
    width: 100,
  },
  itemText: {
    marginLeft: 20,
    marginTop: 10,
    flex: 1,
  },
  albumName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.charcoalGrey,
  },
  artistName: {
    color: Colors.charcoalGrey,
  },
  notesButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesButtonText: {
    color: 'green',
  },
  itemsList: {
    flex: 1,
  },
  notesForm: {
    flex: 1,
  },
  notesTextInput: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.white,
    height: 200,
    width: '90%',
  },
  notesSubmitButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesSubmitButtonText: {
    color: Colors.white,
    fontSize: 24,
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  spinnerBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  spinnerTitle: {
    marginTop: 20,
    fontSize: 24,
  },
  spinnerSubtitle: {
    marginTop: 10,
    fontSize: 12,
  },
}
