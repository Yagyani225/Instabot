# imports
from instapy import InstaPy
from instapy import smart_run
# login credentials
insta_username = 'tyra7'
insta_password = '*******'

# get an InstaPy session!
# set headless_browser=True to run InstaPy in the background
session = InstaPy(username=insta_username,
                  password=insta_password,
                  headless_browser=False)
with smart_run(session):
    """ Activity flow """
    # general settings
    session.set_relationship_bounds(enabled=True,
                                    delimit_by_numbers=True,
                                    max_followers=40000,#40000000000
                                    min_followers=10,
                                    min_following=10)
    session.follow_user_followers(['smritiiraniofficial'], amount=100,
                                  randomize=True)
    session.end()
